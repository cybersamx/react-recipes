// CREDIT: https://github.com/vercel/nextjs-postgres-auth-starter/blob/main/middleware.ts

import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const rootPath = '/';
const loginPath = '/';
const authorizedPath = '/protected';

async function middleware(req: NextRequest) {
  const reqPath = req.nextUrl.pathname;

  if (reqPath === rootPath) {
    // If it's the root path, render the page.
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session && reqPath === authorizedPath) {
    // If not logged in and not in protected path, go to login page.
    return NextResponse.redirect(new URL(loginPath, req.url));
  } else if (session && reqPath === rootPath) {
    // If logged in and in root path, go to protected page.
    return NextResponse.redirect(new URL(authorizedPath, req.url));
  }

  return NextResponse.next();
}

export default middleware;
