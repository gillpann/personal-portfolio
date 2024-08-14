import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

import {
    RiBriefcase4Fill,
    RiTodoFill,
    RiArrowDownSLine,
    RiCodeSSlashFill,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
    const texts = [
        "Front End Developer",
        "UI/UX Designer",
        // more
    ];

    return (
        <section className="py-12 xl:py-20 min-h-screen xl:min-h-[84vh] xl:pt-16">
        <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col xl:flex-row xl:justify-between gap-y-8 xl:gap-x-8">
            {/* {text} */}
            <div className="flex flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                <div
                className="text-sm uppercase font-semibold mb-4 text-primary tracking-[2px]"
                data-aos="fade-down"
                >
                Hi there👋, my name is
                </div>
                <h1 className="h1 mb-4" data-aos="fade-right">
                Satria Ahmad Gilvan
                </h1>
                {/* Typing Animation */}
                <div
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 whitespace-nowrap"
                data-aos="fade-right"
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
                >
                I am passionate about technology and dedicated to advancing my
                skills in computer science.
                </p>
                {/* button */}
                <div
                className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12"
                data-aos="zoom-in"
                >
                <Link href="/contact">
                    <Button className="gap-x-2 dark:text-white">
                    Contact me <Send size={18} />
                    </Button>
                </Link>
                <Button variant="secondary" className="gap-x-2">
                    Download CV <Download size={18} />
                </Button>
                </div>
                {/* socials */}
                <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
                data-aos="fade-up"
                />
            </div>

            {/* {image} */}
            <div
                className="hidden xl:flex relative bottom-6"
                data-aos="fade-left"
            >
                {/* badge 1 */}
                <Badge
                containerStyles="absolute top-[30%] -left-[5rem]"
                icon={<RiBriefcase4Fill />}
                endCountNum={1}
                badgeText="Years Of Experience"
                />
                {/* badge 2 */}
                <Badge
                containerStyles="absolute top-[80%] -left-[2rem]"
                icon={<RiTodoFill />}
                endCountNum={10}
                endCountText="+"
                badgeText="Finished Projects"
                />
                {/* badge 3 */}
                <Badge
                containerStyles="absolute top-[55%] -right-10"
                icon={<RiCodeSSlashFill />}
                endCountNum={3}
                endCountText="+"
                badgeText="Skills Mastered"
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

            {/* {icon} */}
            <div className="hidden md:flex absolute left-1/2 bottom-58 bottom-8 xl:bottom-8 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
        </div>
        </section>
    );
};

export default Hero;
