import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
const headingFont = localFont({
  src: "../../public/fonts/NotoSansTC.woff2",
  weight: "600",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center felx-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white  p-2 px-4 rounded-md pb-4 w-fit">
          Work forward.
        </div>
        <div
          className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          作為trello的替代。
        </div>
        <Button className="mt-6" size="lg" asChild>
          <Link href="/sign-up">開始免費試用</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
