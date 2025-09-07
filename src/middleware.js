import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "google");

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;

  // ✅ Protect both /admin/* and /signup
  const isProtectedPath =
    pathname.startsWith("/admin") || pathname === "/signup";

  if (isProtectedPath) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await jwtVerify(token, JWT_SECRET); // throws if expired/invalid
    } catch (err) {
      console.log("JWT error:", err.message);
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.set("accessToken", "", { path: "/", maxAge: -1 }); // clear cookie
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/signup"],

  runtime: "nodejs",
};
