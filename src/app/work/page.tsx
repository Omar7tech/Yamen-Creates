import HeroSection from "@/sections/work/HeroSection"
import ProgramsSection from "@/sections/work/ProgramsSection"

function page() {
  return (
    <div className="mt-32 space-y-8">
        <HeroSection/>
        <ProgramsSection/>
    </div>
  )
}

export default page