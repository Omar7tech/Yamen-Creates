import ServiceCard from "@/components/ServiceCard"

function ServicesSection() {
    return (
        <section className="relative pt-10">
            {/* MASSIVE background glow (bleeds across sections) */}
            <div
                aria-hidden
                className="
          pointer-events-none
          absolute inset-x-70 -top-64 -bottom-64 -left-40
          bg-[radial-gradient(ellipse_at_center,rgba(200,42,255,0.50),transparent_70%)]
          blur-[120px]
        "
            />

            {/* secondary soft glow for depth */}
            <div
                aria-hidden
                className="max-w-50 max-h-50 
          pointer-events-none
          absolute inset-x-50 -top-40 -bottom-40 left-100
          bg-[radial-gradient(ellipse_at_center,rgba(130,42,200,0.70),transparent_75%)]
          blur-[120px]
        "
            />

            {/* content */}
            <div className="relative mx-auto px-5 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ServiceCard
                        index="01"
                        title="BRND"
                        items={["Strategies", "Identities", "Designs"]}
                    />
                    <ServiceCard
                        index="02"
                        title="MRKT"
                        items={["Products", "Markets", "Growth"]}
                    />
                    <ServiceCard
                        index="03"
                        title="CTNT"
                        items={["Content", "Media", "Sales"]}
                    />
                    <ServiceCard
                        index="04"
                        title="DVLP"
                        items={["Websites", "Interface", "Experience"]}
                    />
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
