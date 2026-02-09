import MagicBento from "@/components/MagicBento";
import HeroSection from "@/sections/HeroSection";
import WeBelieveSection from "@/sections/WeBelieveSection";
import OurBrandEquation from "@/sections/OurBrandEquation";
import HowWeWork from "@/sections/HowWeWork";
import ServicesSection from "@/sections/ServicesSection";

export default function Home() {


  return (
    <div className="mt-32  space-y-20 ">
      <HeroSection />
      <WeBelieveSection />
      <OurBrandEquation />
      <HowWeWork />
      <ServicesSection />
      <div className="h-200">

      </div>
    </div>
  );
}
