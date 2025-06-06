import { NextRequest, NextResponse } from 'next/server';

export const intlMiddleware =
  () =>
  async (req: NextRequest): Promise<NextResponse | null> => {
    return null;
  };
