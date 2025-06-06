import { NextRequest, NextResponse } from 'next/server';
import { authMiddleware } from './middlewares/auth';
import { intlMiddleware } from './middlewares/intl';

function chain(
  middlewares: ((req: NextRequest) => Promise<NextResponse | null>)[]
) {
  return async (req: NextRequest) => {
    let response: NextResponse | null = null;
    for (const middleware of middlewares) {
      response = await middleware(req);
      if (response) {
        return response;
      }
    }
    return null;
  };
}

export function middleware(req: NextRequest) {
  return chain([
    authMiddleware([
      {
        route: 'auth',
        children: [
          { route: 'signout', auth: true },
          { route: '**', auth: false },
        ],
      },
      { route: '**', auth: true },
    ]),
    intlMiddleware(),
  ])(req);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
