import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export type Page = {
  route: string;
  auth?: boolean;
  children?: Page[];
};

function isProtectedRoute(url: string, pages: Page[], route: string): boolean {
  for (const page of pages) {
    const fullPath = route + page.route;

    let valid = false;
    if (page.route === '**') {
      valid = true;
    } else {
      const regex = new RegExp(`^${fullPath.replace(/:\w+/g, '\\w+')}$`);
      valid = regex.test(url);
    }

    if (valid) {
      if (page.auth === true) {
        return true; // This route is explicitly protected
      }
      if (page.children) {
        return isProtectedRoute(url, page.children, fullPath);
      }
      return false; // This route is not protected
    }
  }
  return false; // Default to protected if no match found
}

export const authMiddleware = (pages: Page[]) => {
  return async (req: NextRequest) => {
    if (isProtectedRoute(req.nextUrl.pathname, pages, '/')) {
      const session = await auth();
      if (!session) {
        const url = new URL('/auth/signin', req.url);
        url.searchParams.set('callbackUrl', req.nextUrl.pathname);
        return NextResponse.redirect(url, 307);
      }
    }
    return null;
  };
};
