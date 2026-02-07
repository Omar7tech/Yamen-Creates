import Image from "next/image"
import { Menu } from "lucide-react"
import DecryptedText from "@/components/DecryptedText"
const logo = "/yamenlogo.svg"
const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]
function Nav() {
    return (
        <nav className="max-w-[1400px] mx-auto fixed z-50 top-0 left-0 right-0 flex content-center justify-between items-center p-5">
            <div className="font-light text-2xl border-solid border-white/[.145] border-2 rounded-full px-4 py-3 backdrop-blur-sm bg-white/5 transition-all duration-300 hover:bg-gray-100 hover:border-gray-300 hover:scale-105 cursor-pointer group">
                <Image 
                    src={logo} 
                    alt="yamen logo" 
                    width={250} 
                    height={20} 
                    className="transition-all duration-300 group-hover:brightness-20 group-hover:grayscale"
                />
            </div>
            <div className="hidden sm:flex space-x-3">
                {links.map((link) => (
                    <a 
                        key={link.href}
                        className="font-light text-2xl border-solid border-white/[.145] border-2 rounded-full px-4 py-2 backdrop-blur-sm bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/5 hover:text-zinc-300 hover:scale-105" 
                        href={link.href}
                    >
                        <DecryptedText
                            text={link.name}
                            animateOn="hover"
                            speed={50}
                            revealDirection="start"
                            sequential
                            useOriginalCharsOnly={false}
                        />
                    </a>
                ))}
            </div>

            {/* Mobile Burger Menu - Capsule Style */}
            <button className="sm:hidden font-light text-2xl border-solid border-white/[.145] border-2 rounded-full px-4 py-3 backdrop-blur-sm bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/5 hover:text-zinc-300 hover:scale-105 cursor-pointer">
                <Menu className="w-6 h-6" />
            </button>
        </nav>
    )
}

export default Nav