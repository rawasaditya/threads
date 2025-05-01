// middleware.ts (Lightweight edge middleware)
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("Token:", token); // Debugging line
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Instead of connecting to MongoDB here, you could have a separate API route that validates the token.
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
