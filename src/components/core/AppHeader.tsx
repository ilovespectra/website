import Link from "next/link";
import AppNav from "@/components/core/AppNav";

type ComponentProps = {
  className?: string;
};

export default function AppHeader({}: ComponentProps) {
  return (
    <>
      <AppNav />

      <div className="text-center">
        <div className="pt-6 my-8 text-4xl font-bold tracking-tight text-indigo-500 sm:text-5xl md:text-6xl">
          <Link href="/" className="">
            Nick Frostbutter
          </Link>
        </div>
      </div>

      <div
        id="header-divider"
        className="w-full h-px my-4 transform bg-indigo-500 -rotate-1"
      ></div>
    </>
  );
}
