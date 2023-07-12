import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  afterAuth(auth, req, evt) {
    publicRoutes: ["/"];
    if (req.nextUrl.pathname.startsWith("/profile") && !auth.userId) {
      return redirectToSignIn();
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
