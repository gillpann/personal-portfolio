'use client'
import Link from "next/link"
import { Button } from "./ui/button"

// import swiper react component
import {Swiper, SwiperSlide} from "swiper/react";


// import swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination} from "swiper/modules"

// components
import ProjectCard from "@/components/ProjectCard"


const projectData = [
    {
        image: '/work/1.png',
        category: 'Front End',
        name: 'Web Coffe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aspernatur adipisci? Quae minima laboriosam vel quisquam! Quisquam minima, quas tempore alias harum reiciendis necessitatibus sunt iure tempora nisi iste maxime aliquid adipisci veniam quasi dignissimos doloribus assumenda distinctio omnis. Maiores culpa aliquam, harum distinctio rem dolorum tenetur praesentium dolores et?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'Front End',
        name: 'Login page',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'Front End',
        name: 'Web Univ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'Front End',
        name: 'Van Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'FullStack',
        name: 'Web Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'FullStack',
        name: 'Web Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/5.png',
        category: 'Web Design',
        name: 'Web Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'FullStack',
        name: 'Web Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/5.png',
        category: 'Web Design',
        name: 'Web Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
]


const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start mt-10">
                    <h2 className="section-title mb-4">Latest Project</h2>
                    <p className="subtitle mb-8">Here are some of my latest projects. Click below to explore more.</p>
                    <Link href='/projects'><Button>All Project</Button></Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[800px] xl:absolute right-0 top-0">
                    <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                    }}} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                        {/* show only the first 4 project for the slides */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work