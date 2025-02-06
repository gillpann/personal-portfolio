"use client";

import { useEffect, useState } from "react";
import Socials from "@/components/Socials";

const WelcomeScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false); 

    useEffect(() => {
        const timer = setTimeout(() => {
        setFadeOut(true); 
        }, 3500); 

        const hideTimer = setTimeout(() => {
        setIsVisible(false); 
        }, 4500); 

        return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white dark:bg-black transition-all duration-1000">
        <div className="absolute inset-0 bg-white dark:bg-black z-10"></div>{" "}
        <div
            className={`text-center z-20 transition-all duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
            }`}
        >
            {/* Logo Sosial */}
            <div className="mb-4" data-aos="fade-down">
            <Socials
                containerStyles="flex justify-center gap-6"
                iconsStyles="text-3xl text-primary hover:text-secondary transition-colors"
            />
            </div>

            <div
            className="text-sm uppercase font-semibold mb-4 tracking-[2px]"
            data-aos="fade-down"
            style={{ color: "var(--text-primary)" }}
            >
            Welcome to my
            </div>

            <h1
            className="text-3xl uppercase sm:text-4xl md:text-6xl font-bold text-primary whitespace-nowrap"
            data-aos="fade-up"
            >
            Portfolio Website
            </h1>
        </div>
        </div>
    );
};

export default WelcomeScreen;
