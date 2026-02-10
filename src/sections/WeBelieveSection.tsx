import Image from "next/image"



function WeBelieveSection() {

    return (
        <>
            <div className="px-5 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div
                        id="title-illustration"
                        className="flex items-center justify-between gap-4 md:grid md:grid-rows-[auto_1fr] md:gap-0"
                    >
                        <h1 className="font-special-gothic-expanded text-[clamp(6rem,10vw,15rem)] font-extrabold leading-[100px]">
                            WE
                        </h1>
                        <div className="flex items-center min-h-0 md:hidden">

                            <Image
                                src="/jam.png"
                                alt=""
                                width={100}
                                height={100}
                                className="transition-all duration-500 hover:scale-115 hover:drop-shadow-2xl hover:shadow-purple-500/25"
                            />

                        </div>
                        <div className="hidden md:flex items-center justify-center content-center min-h-0">

                            <Image

                                src="/illustration2.png"

                                alt=""

                                width={300}

                                height={300}

                                className="transition-all duration-500 hover:scale-115 hover:drop-shadow-2xl hover:shadow-purple-500/25"

                            />

                        </div>

                    </div>

                    <div id="paragraph" className="font-extralight text-[clamp(1.125rem,2.5vw,1.875rem)] space-y-5 tracking-wide leading-[1.2]">

                        <p>

                            We believe every business starts with an

                            idea—but only becomes a brand through

                            clarity, structure, and intent.

                        </p>

                        <p>

                            Our role is to transform raw concepts into

                            market-ready businesses by aligning

                            strategy with human behavior, and

                            translating ideas into brand, marketing,

                            content, and digital systems built to

                            perform through growth, complexity, and

                            scale.

                        </p>

                        <p>
                            Through program-led brand strategy,
                            identity systems, content direction, and
                            web infrastructure, we partner with
                            founders and leadership teams to build

                            brands that connect emotionally, operate

                            commercially, and endure over time.

                        </p>

                    </div>

                </div>

            </div>



        </>

    )

}



export default WeBelieveSection