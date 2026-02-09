import DecryptedText from "@/components/DecryptedText";
import MagicBento from "@/components/MagicBento"
import { ArrowRight } from "lucide-react";

function HeroSection() {
  const strategies = [
    "Design",
    "Impact",
    "Strategy",
    "Experience",
  ];
  return (
    <div className="px-5 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
        <div className="space-y-5">
          <div>
            <h1 className="font-bold text-[clamp(1.5rem,4vw,3.6rem)] leading-none">
              <DecryptedText
                text="We Work With"
                animateOn="view"
                revealDirection="start"
                sequential
                useOriginalCharsOnly={false}
              />
            </h1>
            <p className="font-bold text-[clamp(1.5rem,4vw,3.6rem)] leading-none">
              <DecryptedText
                text="Founders, CEOs,"
                animateOn="view"
                speed={60}
                revealDirection="start"
                sequential
                useOriginalCharsOnly={false}
              />
            </p>
            <p className="font-bold text-[clamp(1.5rem,4vw,3.6rem)] leading-none">
              <DecryptedText
                text="& Leadership Teams"
                animateOn="view"
                revealDirection="start"
                sequential
                useOriginalCharsOnly={false}
              />
            </p>
          </div>
          <div className="space-y-5 max-w-[600px]">
            <p className="text-white/70 text-sm leading-none text-[clamp(1rem,4vw,1.5rem)] font-extralight ">
              to define the core ideas behind their businesses—then
              build brand, marketing, content, and digital systems
              that carry them through growth, complexity, and scale.
            </p>
            <p className="text-white/70 text-sm leading-none text-[clamp(1rem,4vw,1.5rem)] font-extralight ">
              Yamen Creates is a strategic partner for businesses
              that don't want noise—they want direction, structure,
              and results.
            </p>
            <div className="flex  flex-row gap-3 pt-5">
              <button className="px-6 py-3 border border-white/30 rounded-full text-white font-light hover:bg-white/10 transition-all duration-300 flex items-center justify-between gap-2">
                Find Your Program
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border border-white/30 rounded-full text-white font-light hover:bg-white/10 transition-all duration-300 flex items-center justify-between gap-2">
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </button>
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
      <div className="flex justify-end items-end py-10">
        <p className="font-extralight text-4xl uppercase leading-none tracking-wider">
          (Scroll)
        </p>
      </div>
    </div>
  )
}

export default HeroSection