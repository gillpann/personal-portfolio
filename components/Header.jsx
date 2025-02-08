"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        return () => window.removeEventListener("scroll", scrollYPos);
    });

    // Determine if we should show navigation
    const shouldShowNav = pathname === '/';

    return (
        <header
            className={`${
                header
                    ? "py-4 bg-white shadow-lg dark:bg-accent"
                    : "py-6 dark:bg-transparent"
            } sticky top-0 z-30 transition-all ${
                pathname === "/" ? "bg-[hsl(var(--muted))]" : "bg-background dark:bg-accent"
            }`}
        >
            <div className="container max-w-screen-xl mx-auto px-4" data-aos="fade-down">
                <div className="flex justify-between items-center">
                    <Logo />

                    {/* Mobile: Toggler di kiri saja jika bukan homepage */}
                    <div className="flex xl:hidden items-center gap-x-6">
                        <ThemeToggler />
                        {shouldShowNav && <MobileNav />}
                    </div>

                    {/* Desktop: Nav di tengah, ThemeToggler tetap di kanan */}
                    <div className="hidden xl:flex items-center gap-x-6">
                        {shouldShowNav && (
                            <Nav
                                containerStyles="flex gap-x-8 items-center"
                                linkStyles="relative hover:text-primary transition-all"
                                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                            />
                        )}
                        <ThemeToggler />
                    </div>
                </div>
            </div> 
        </header>
    );
};

export default Header;