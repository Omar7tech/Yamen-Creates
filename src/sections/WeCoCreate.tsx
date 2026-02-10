import Antigravity from "@/components/Antigravity"

function WeCoCreate() {
    return (
        <div className="   font-extralight text-[clamp(1rem,20vw,20rem)] leading-[0.85] relative mb-35 ">
            {/* Animation - only visible on desktop */}
            <div className="hidden md:block" style={{ width: '100%', height: '400px', position: 'relative' }}>
                <Antigravity
                    count={300}
                    magnetRadius={6}
                    ringRadius={7}
                    waveSpeed={0.4}
                    waveAmplitude={1}
                    particleSize={1.5}
                    lerpSpeed={0.05}
                    color="#C82AFF"
                    autoAnimate={false}
                    particleVariance={1}
                    rotationSpeed={0}
                    depthFactor={1}
                    pulseSpeed={3}
                    particleShape="sphere"
                    fieldStrength={10}
                />

                
                <div className="px-5 md:px-10 lg:px-20 absolute inset-0 flex flex-col justify-center z-10 pointer-events-none">
                    <h1> WeCo </h1>
                    <h1> -Create <span className="text-white/50 ">®</span> </h1>
                </div>
            </div>
            
            {/* Text only - only visible on mobile */}
            <div className="px-5 md:px-10 lg:px-20 md:hidden">
                <h1> WeCo </h1>
                <h1> -Create <span className="text-white/50 ">®</span> </h1>
            </div>
        </div>
    )
}

export default WeCoCreate