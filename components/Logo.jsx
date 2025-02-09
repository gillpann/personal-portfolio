import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    const handleClick = (e) => {
        e.preventDefault(); 
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div data-aos="fade-right" data-aos-delay="200">
            <Link
                href="/"
                onClick={handleClick}
                className="flex items-center text-3xl font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="mr-2"
                />
            </Link>
        </div>
    );
};

export default Logo;
