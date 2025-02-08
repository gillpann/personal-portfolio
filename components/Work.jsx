"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

import { projectData } from "@/data/projects";

const Work = () => {
    return (
        <section id="work" className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            {/* text */}
            <div
            className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start mt-10"
            data-aos="fade-right"
            data-aos-delay="200"
            >
            <h2 className="section-title mb-4" data-aos="fade-up"
            data-aos-delay="300">
                Latest Project
            </h2>
            <p className="subtitle mb-8" data-aos="fade-up"
            data-aos-delay="400">
                Here are some of my latest projects. Click below to explore more.
            </p>
            <Link href="/projects" data-aos="zoom-in" data-aos-delay="500">
                <Button className="group">
                    All Project
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300"> →</span>
                </Button>
            </Link>
            </div>
            {/* slider */}
            <div
            className="xl:max-w-[800px] xl:absolute right-0 top-0"
            data-aos="fade-left"
            data-aos-delay="600"
            >
            <Swiper
                className="h-[480px]"
                slidesPerView={1}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                {/* show only the first 4 project for the slides */}
                {projectData.slice(0, 4).map((project, index) => {
                return (
                    <SwiperSlide key={index}>
                    <ProjectCard project={project} />
                    </SwiperSlide>
                );
                })}
            </Swiper>
            </div>
        </div>
        </section>
    );
};

export default Work;
