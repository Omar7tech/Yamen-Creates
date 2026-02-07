import MagicBento from "@/components/MagicBento";
import HeroSection from "@/sections/HeroSection";
import WeBelieveSection from "@/sections/WeBelieveSection";
import Image from "next/image";

export default function Home() {


  return (
    <div className="mt-32 max-w-[1400px] mx-auto  px-5">
      <HeroSection />
      <WeBelieveSection />
    </div>
  );
}
