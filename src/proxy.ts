import { NextRequest, NextResponse } from 'next/server';
import { getSession } from './entities/auth/lib';

const PROTECTED_ROUTES = [
  '/catalog/track/',
  '/catalog/selection/',
  '/playlist/2',
  '/playlist/3',
  '/playlist/4',
  '/auth/refresh',
  '/playlist',
];

const PUBLIC_ROUTES = ['/auth/signin', '/auth/signup'];

const getPath = (path: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? `/skypro-music${path}` : path;
};

export default async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const payload = await getSession();
  const isProtected = PROTECTED_ROUTES.includes(path);
  const isPublic = PUBLIC_ROUTES.includes(path);

  if (!payload?.email && isProtected) {
    return NextResponse.redirect(new URL(getPath('/auth/signin'), request.url));
  }

  //redirect on main page if User is authenticated
  if (isPublic && payload?.email) {
    return NextResponse.redirect(new URL(getPath('/playlist'), request.url));
  }

  if (path === '/') {
    return NextResponse.redirect(new URL(getPath('/playlist'), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.svg|.*\\.map|/|.*\\.png$).*)',
  ],
};
