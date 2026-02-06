import Image from "next/image"
const logo = "/yamenlogo.svg"
const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
]
function Nav() {
    return (
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-5">
            <div>
                <Image src={logo} alt="yamen logo" width={250} height={50} />
            </div>
            <div className="flex space-x-3">
                {links.map((link) => (
                    <a 
                        key={link.href}
                        className="font-light text-2xl border-solid border-white/[.145] border-2 rounded-full px-4 py-2 backdrop-blur-sm bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/5 hover:text-zinc-300" 
                        href={link.href}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Nav