import { Button } from "./ui/button";
import Link from "next/link";
import { Sparkles, MessageCircle } from "lucide-react";

const Cta = () => {
    return (
        <section id="cta" className="py-24 relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-tertiary dark:bg-secondary/40">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
        </div>

        <div className="container mx-auto relative">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Decorative element */}
            <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center gap-2 text-primary">
                <Sparkles className="w-5 h-5" />
                <span className="uppercase text-sm font-semibold tracking-wider">
                    Let's Create Something Amazing
                </span>
                <Sparkles className="w-5 h-5" />
                </div>
            </div>

            {/* Main heading with gradient effect */}
            <h2
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Ready to <span className="gradient-text">Transform</span> Your Ideas
                into <span className="gradient-text">Reality?</span>
            </h2>

            {/* Subheading */}
            <p
                className="text-muted-foreground text-lg mb-8 max-w-2xl"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                Let's collaborate and build something extraordinary together. Your
                vision, combined with my expertise - the possibilities are endless.
            </p>

            {/* CTA Button */}
            <div data-aos="fade-up" data-aos-delay="400">
                <Link href="/contact">
                <Button className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center gap-2">
                    Let's Discuss Your Project
                    <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </Button>
                </Link>
            </div>

            {/* Optional: Decorative shapes */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            </div>
        </div>
        </section>
    );
};

export default Cta;
