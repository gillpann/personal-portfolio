"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { path: "/#hero", name: "home" },
    { path: "/#about", name: "about" },
    { path: "/#skills", name: "skills" },
    { path: "/#services", name: "services" },
    { path: "/#work", name: "projects" },
    { path: "/#cta", name: "contact" }
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onLinkClick }) => {
    const path = usePathname();

    const handleClick = (e, path) => {
        e.preventDefault();
        const element = document.querySelector(path.replace('/', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (onLinkClick) onLinkClick();
    };
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize ${linkStyles} text-sm sm:text-base`}
                        onClick={(e) => handleClick(e, link.path)}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                transition={{ type: "tween" }}
                                layoutId="underLine"
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;