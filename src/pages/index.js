import Image from "next/image";
import { Work_Sans, Source_Serif_4 } from "next/font/google";
import HomePage from "@/components/pages/HomePage";

const work_sans = Work_Sans({ 
  subsets: ["latin"],
  variable: '--font-work_sans',
});

const source_serif_4 = Source_Serif_4({ 
  subsets: ["latin"],
  variable: '--font-source_serif_4',
});

export default function Home() {
  return (
    <HomePage />
  );
}
