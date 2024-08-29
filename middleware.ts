
import {
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/",'/sign-up','/sign-in']);

export default clerkMiddleware((auth, req) => {
  if (auth().userId && isPublicRoute(req)){
    let path = "/select-org"
    
    if (auth().orgId) {
      path = "/organization/${auth.orgId}";
    }
    const redirectUrl = new URL(path, req.url);
    return NextResponse.redirect(redirectUrl);

  }

  if (!auth().userId && !isPublicRoute(req)){
    const signInUrl = new URL("/sign-in", req.url);
    return NextResponse.redirect(signInUrl);
  }

  if (auth().userId && !auth().orgId && req.nextUrl.pathname !== "/select-org") {
    const orgSelection = new URL("/select-org", req.url);
    return NextResponse.redirect(orgSelection);
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

/**
 * 第一個條件 if (auth.userId && auth.isPublicRoute)：

如果用戶已登錄 (auth.userId 存在)，且當前路徑是公開路徑，則根據是否有組織 ID (auth.orgId) 將用戶重定向到不同的路徑。
如果用戶有 orgId，將其重定向到對應組織的頁面：/organization/${auth.orgId}。
如果用戶沒有 orgId，則將其重定向到組織選擇頁面：/select-org。


第二個條件 if (!auth.userId && !auth.isPublicRoute)：

如果用戶未登錄，且當前路徑不是公開路徑，則將用戶重定向到登錄頁面，並且在登錄後返回當前頁面。
第三個條件 if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org")：

如果用戶已登錄，但尚未選擇組織（orgId 為 null 或 undefined），且當前路徑不是 "/select-org"，則將用戶重定向到組織選擇頁面。
 */
