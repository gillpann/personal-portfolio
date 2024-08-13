import Link from "next/link";
import Image from "next/image"

const Logo = () => {
    return (
        <Link href='/' className="flex items-center text-3xl font-bold hover:text-blue-700 transition duration-300 ease-in-out">
            <Image src='/logo.png' alt="logo" width={40} height={40} className="mr-2"/>
            <span className="gradient-text">Gilvan.</span>
        </Link>
    )
}

export default Logo