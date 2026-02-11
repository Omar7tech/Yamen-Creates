import { ArrowRight } from "lucide-react"


function SignatureProgramItem() {
    return (
        <div className="py-10 px-5">
            <div className="grid grid-cols-3 w-full gap-10">
                <div id="firstgrid" className="flex flex-col justify-between min-h-0 space-y-5">
                    <h1 className="text-[clamp(1.5rem,4vw,2rem)] font-bold">
                        For businesses that need to grow and expand
                    </h1>
                    <button className="px-3 md:px-6 py-3 border border-white/30 rounded-full text-white font-light hover:bg-white/10 transition-all duration-300 flex items-center justify-between gap-2 w-fit">
                        Let's Talk
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
                <div id="bullets" className="col-span-2 text-[clamp(1rem,1.2vw,1.3rem)] font-extralight">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Scale operations and brand presence with control and clarity</li>
                        <li>Optimize product and distribution channels</li>
                        <li>Drive measurable sales performance</li>
                        <li>Track, expand, and improve ROI and KPI performance</li>
                        <li>Build partnerships and growth-driven campaigns</li>
                    </ul>
                </div>
            </div>
            <div id="badges">
                <div className="flex flex-wrap gap-3 mt-8">
                    <button className="px-4 py-2 border border-white/30 rounded-full text-white font-light hover:bg-white/10 transition-all duration-300 text-sm">
                        Brand Strategy
                    </button>
                    <button className="px-4 py-2 border border-white/30 rounded-full text-white font-light hover:bg-white/10 transition-all duration-300 text-sm">
                        Target audience
                    </button>
                    <button className="px-4 py-2 border border-white/30 rounded-full text-white font-light hover:bg-white/10 transition-all duration-300 text-sm">
                        Go-To-Market
                    </button>
                    <button className="px-4 py-2 border border-white/30 rounded-full text-white font-light hover:bg-white/10 transition-all duration-300 text-sm">
                        Core Messaging
                    </button>
                    <button className="px-4 py-2 border border-white/30 rounded-full text-white font-light hover:bg-white/10 transition-all duration-300 text-sm">
                        Creative Direction
                    </button>
                    <button className="px-4 py-2 border border-white/30 rounded-full text-white font-light hover:bg-white/10 transition-all duration-300 text-sm">
                        Concept development
                    </button>
                </div>
            </div>
            <div id="images">
                <div className="grid grid-cols-3 gap-10 mt-8">
                    <div className="aspect-square bg-white/10 rounded-3xl border border-white/20"></div>
                    <div className="aspect-square bg-white/10 rounded-3xl border border-white/20"></div>
                    <div className="aspect-square bg-white/10 rounded-3xl border border-white/20"></div>
                </div>
            </div>
        </div>
    )
}

export default SignatureProgramItem