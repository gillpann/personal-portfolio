"use client"
import { Button } from "./ui/button";
import Link from "next/link";
import { Sparkles, MessageCircle } from "lucide-react";
import { useLoadingState } from "./LoadingStateProvider";

const Cta = () => {
    const { showLoading } = useLoadingState();

    const handleClick = () => {
        showLoading();
    };

    return (
        <section id="cta" className="py-16 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-tertiary dark:bg-secondary/40">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
            </div>

            <div className="container mx-auto relative px-6">
                <div className="flex flex-col items-center text-center max-w-xl md:max-w-3xl mx-auto">
                    <div className="mb-4 md:mb-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex items-center gap-2 text-primary text-sm md:text-base">
                            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="uppercase font-semibold tracking-wider">
                                Let's Create Something Amazing
                            </span>
                            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                    </div>

                    <h2
                        className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Ready to <span className="gradient-text">Transform</span> Your Ideas
                        into <span className="gradient-text">Reality?</span>
                    </h2>

                    <p
                        className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 max-w-lg md:max-w-2xl"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Let's collaborate and build something extraordinary together. Your
                        vision, combined with my expertise - the possibilities are endless.
                    </p>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <Link href="/contact" onClick={handleClick}>
                            <Button className="group bg-primary hover:bg-primary/80 text-white px-6 py-4 md:px-8 md:py-6 rounded-full transition-all duration-300 transform hover:scale-105">
                                <span className="flex items-center gap-2 text-sm md:text-base">
                                    Let's Discuss Your Project
                                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </Link>
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-24 h-16 md:h-24 bg-primary/10 rounded-full blur-xl"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 md:w-32 h-24 md:h-32 bg-primary/10 rounded-full blur-xl"></div>
                </div>
            </div>
        </section>
    );
};

export default Cta;