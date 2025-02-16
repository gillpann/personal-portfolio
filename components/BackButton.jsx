"use client"
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLoadingState } from "./LoadingStateProvider";

const BackButton = ({ destination, label }) => {
    const { showLoading } = useLoadingState();

    const handleClick = () => {
        showLoading();
    };

    return (
        <div className="container mx-auto mt-8 mb-12">
            <Link href={destination} onClick={handleClick}>
                <Button 
                    variant="outline" 
                    className="group gap-x-2 shadow-md px-6 py-3 rounded-full
                        bg-background dark:bg-secondary hover:bg-accent 
                        dark:hover:bg-secondary/80 transition-all duration-300"
                    data-aos="fade-right"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    {label}
                </Button>
            </Link>
        </div>
    );
};

export default BackButton;