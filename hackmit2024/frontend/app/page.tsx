import { FlipWords } from "@/components/custom/flipwords";
import { WavyBackground } from "@/components/custom/wavybackground";

import Link from "next/link";

export default function Home() {
  const words = [" animals", " ecosystems", " capybaras", " books", " STEM topics"];

  return (
    <div className="w-full h-full">
      <div className="flex space-between flex-col justify-center">
        <WavyBackground className="max-w-4xl mx-auto pb-40 h-max max-h-screen">
          <div className="justify-center text-center text-7xl mx-auto font-bold text-slate-700 dark:text-slate-300 p-4">
            Discover new facts about
            <FlipWords words={words} /> <br />
            through web surfing
          </div>
          <div className="text-gray-500  text-2xl text-center p-6">
            A modernized graphical visualization of the internet
          </div>

          <div className="text-center">
            <Link
              href="/search"
              className="inline-block px-8 py-6 text-white text-xl font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%] focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 transition-all duration-500 ease-in-out"
            >
              Go to Playground
            </Link>
          </div>
        </WavyBackground>
      </div>
    </div>
  );
}
