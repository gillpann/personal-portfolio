'use client'
import React, { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"
import { projectData } from "@/data/projects"

// Remove duplicate categories
const uniqueCategories = ['all projects', ...new Set(projectData.map(item => item.category))];

const Projects = () => {
    const [category, setCategory] = useState('all projects');

    // Filter projects based on selected category
    const filteredProjects = category === 'all projects'
        ? projectData
        : projectData.filter(project => project.category === category);

    return (
        <section className='min-h-screen pt-12'>
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto" data-aos="fade-down">My Projects</h2>
                {/* Tabs */}
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none' data-aos="fade-up" data-aos-delay="200">
                        {uniqueCategories.map((cat, index) => (
                            <TabsTrigger
                                onClick={() => setCategory(cat)}
                                value={cat}
                                key={index}
                                className='capitalize w-[162px] md:w-auto'
                                data-aos="zoom-in"
                                data-aos-delay={300 + (index * 100)}
                            >
                                {cat}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* TabsContent */}
                    <TabsContent value={category}>
                        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {filteredProjects.map((project, index) => (
                                <div key={index} data-aos="fade-up" data-aos-delay={400 + (index * 100)}>
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}

export default Projects;
