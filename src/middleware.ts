// middleware.ts
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("LOG", request.url);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
