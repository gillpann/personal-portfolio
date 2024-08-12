'use client'
import React, {useState} from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"


const projectData = [
    {
        image: '/work/1.PNG',
        category: 'Front End',
        name: 'Web Coffe',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aspernatur adipisci? Quae minima laboriosam vel quisquam! Quisquam minima, quas tempore alias harum reiciendis necessitatibus sunt iure tempora nisi iste maxime aliquid adipisci veniam quasi dignissimos doloribus assumenda distinctio omnis. Maiores culpa aliquam, harum distinctio rem dolorum tenetur praesentium dolores et?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.PNG',
        category: 'Front End',
        name: 'Login page',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aspernatur adipisci? Quae minima laboriosam vel quisquam! Quisquam minima, quas tempore alias harum reiciendis necessitatibus sunt iure tempora nisi iste maxime aliquid adipisci veniam quasi dignissimos doloribus assumenda distinctio omnis. Maiores culpa aliquam, harum distinctio rem dolorum tenetur praesentium dolores et?',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.PNG',
        category: 'Front End',
        name: 'Web Univ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.PNG',
        category: 'Front End',
        name: 'Van Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.PNG',
        category: 'FullStack',
        name: 'Web Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.PNG',
        category: 'FullStack',
        name: 'Web Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/5.PNG',
        category: 'Web Design',
        name: 'Web Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.PNG',
        category: 'FullStack',
        name: 'Web Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
    {
        image: '/work/5.PNG',
        category: 'Web Design',
        name: 'Web Portfolio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque!',
        link: '/',
        github: '/',
    },
]

// remove category duplicate
const uniqueCategories = ['all projects',...new Set(projectData.map(item => item.category))];


const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects')
    
    const filteredProjects = projectData.filter(project => {
        // if category is 'all projects' return all projects, else filter by category
        return category === 'all projects' ? project : project.category === category;
    })


    return (
        <section className='min-h-screen pt-12'>
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto" data-aos="fade-down">My Projects</h2>
                {/* Tabs */}
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none' data-aos="zoom-in-up">
                        {categories.map((category, index) => {
                            return <TabsTrigger onClick={()=> setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto'>
                                {category}
                            </TabsTrigger>
                        })}
                    </TabsList>
                    {/* tabs content */}
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project, index) => {
                            return <TabsContent value={category} key={index}>
                                <ProjectCard project={project}/>
                            </TabsContent>
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default Projects