import MagicBento from "@/components/MagicBento";
import Image from "next/image";

export default function Home() {

  const strategies = [
    "Design",
    "Impact",
    "Strategy",
    "Experience",
  ];
  return (
    <div className="mt-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-5">
        <div className="flex flex-col gap-20">
          <p className="text-5xl font-extralight">We partner with founders and businesses to turn vision into structured brands —built with clarity, discipline, and intent.</p>
          <div className="flex">
            <div className="h-full">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 ">
                {strategies.map((strategy) => (
                  <div key={strategy} className="border border-gray-200 px-4 py-2 w-fit rounded-full w- h-fit">
                    {strategy}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bento-grid">
          <MagicBento
            textAutoHide={false}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="139, 4, 250"
            disableAnimations={false}
          />
        </div>
      </div>
    </div>
  );
}
