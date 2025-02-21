"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { path: "/#hero", name: "home" },
    { path: "/#about", name: "about" },
    { path: "/#skills", name: "skills" },
    { path: "/#services", name: "services" },
    { path: "/#work", name: "projects" },
    { path: "/#contact", name: "contact" }
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onLinkClick }) => {
    const path = usePathname();
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => ({
                id: link.path.replace('/#', ''),
                element: document.getElementById(link.path.replace('/#', ''))
            }));

            const currentSection = sections.find(section => {
                if (!section.element) return false;
                const rect = section.element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, path) => {
        e.preventDefault();
        const element = document.querySelector(path.replace('/', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (onLinkClick) onLinkClick();
    };

    return (
        <nav className={`${containerStyles}`} >
            {links.map((link, index) => {
                const isActive = activeSection === link.path.replace('/#', '');
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize ${linkStyles} text-sm sm:text-base relative`}
                        onClick={(e) => handleClick(e, link.path)}
                        data-aos="zoom-in-up" data-aos-delay="200"
                    >
                        {isActive && (
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
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