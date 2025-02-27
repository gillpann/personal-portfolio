import Link from "next/link";
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

import {
    RiBriefcase4Fill,
    RiTodoFill,
    RiArrowDownSLine,
    RiCodeSSlashFill,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
    const texts = [
        "Front End Developer",
        "UI/UX Designer",
    ];

    return (
        <section id="hero" className="py-12 xl:py-20 min-h-screen xl:min-h-[90vh] xl:pt-16 mb-10 xl:mb-20">
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col xl:flex-row xl:justify-between gap-y-8 xl:gap-x-8">
                    {/* text */}
                    <div className="flex flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div
                            className="text-sm uppercase font-semibold mb-4 text-primary tracking-[2px]"
                            data-aos="fade-down"
                            data-aos-delay="200"
                        >
                            Hi there 👋, my name is
                        </div>
                        <h1 
                            className="h1 mb-4" 
                            data-aos="fade-right"
                            data-aos-delay="400"
                        >
                            Satria Ahmad Gilvan
                        </h1>
                        {/* Typing Animation */}
                        <div
                            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 whitespace-nowrap"
                            data-aos="fade-right"
                            data-aos-delay="600"
                        >
                            <span>
                                I'm a{" "}
                                <TypingAnimation
                                    texts={texts}
                                    speed={100}
                                    eraseSpeed={50}
                                    delay={1500}
                                />
                            </span>
                        </div>
                        <p
                            className="subtitle max-w-[490px] mx-auto xl:mx-0"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            I am passionate about technology and dedicated to advancing my
                            skills in computer science.
                        </p>
                        {/* buttons with staggered animation */}
                        <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-3 mx-auto xl:mx-0 mb-12">
                            <a 
                                href="#contact" 
                                data-aos="zoom-in" 
                                data-aos-delay="1000"
                                className="inline-block" 
                            >
                                <Button className="group gap-x-2 bg-primary hover:bg-primary/80 text-white px-6 py-4 md:px-8 md:py-6 rounded-full transition-all duration-300 transform hover:scale-105">
                                    <span className="flex items-center gap-2 text-sm md:text-base">
                                        Contact Me
                                        <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                            </a>
                            <div data-aos="zoom-in" data-aos-delay="1200">
                                <Button className="group gap-x-2 bg-secondary hover:bg-secondary/80 text-white px-6 py-4 md:px-8 md:py-6 rounded-full transition-all duration-300 transform hover:scale-105">
                                    <span className="flex items-center gap-2 text-sm md:text-base">
                                        Download CV
                                        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                                    </span>
                                </Button>
                            </div>
                        </div>
                        {/* socials */}
                        <Socials
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
                            data-aos="fade-up"
                            data-aos-delay="1400"
                        />
                    </div>

                    {/* image */}
                    <div
                        className="hidden xl:flex relative bottom-6"
                        data-aos="fade-left"
                        data-aos-delay="800"
                    >
                        {/* badges with staggered animations */}
                        <Badge
                            containerStyles="absolute top-[30%] -left-[5rem]"
                            icon={<RiBriefcase4Fill />}
                            endCountNum={1}
                            badgeText="Years Of Experience"
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                        />
                        <Badge
                            containerStyles="absolute top-[80%] -left-[2rem]"
                            icon={<RiTodoFill />}
                            endCountNum={10}
                            endCountText="+"
                            badgeText="Finished Projects"
                            data-aos="zoom-in"
                            data-aos-delay="1200"
                        />
                        <Badge
                            containerStyles="absolute top-[55%] -right-10"
                            icon={<RiCodeSSlashFill />}
                            endCountNum={3}
                            endCountText="+"
                            badgeText="Skills Mastered"
                            data-aos="zoom-in"
                            data-aos-delay="1400"
                        />
                        <div className="bg-hero_shape_light dark:bg-hero_shape_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                        <DevImg
                            containerStyles="w-full w-full rounded-full object-cover bg-no-repeat relative top-2 md:w-[450px] md:h-[450px]"
                            imgSrc="/hero/developer.png"
                            width={400}
                            height={300}
                        />
                    </div>
                </div>

                {/* icon */}
                <div 
                    className="hidden md:flex absolute left-1/2 bottom-58 bottom-8 xl:bottom-8 animate-bounce"
                    data-aos="fade-up"
                    data-aos-delay="1600"
                >
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    );
};

export default Hero;