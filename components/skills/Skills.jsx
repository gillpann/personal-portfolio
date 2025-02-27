"use client"

import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Code, PencilRuler } from "lucide-react";
import { skillsData } from "@/data/skillsData";

const SkillItem = ({ name, level, icon, description }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300">
              <img src={icon} alt={name} className="w-12 h-12 object-contain" />
            </div>
            <h3 className="font-semibold text-lg mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{level}</p>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 xl:py-24 mb-12 xl:mb-24">
      <div className="container mx-auto">
        {/* Mobile Layout: Skills Title on Top */}
        <h2
          className="section-title mb-6 text-center mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Skills
        </h2>
        <div className="block xl:hidden">
          <div
            className="space-y-4 text-center mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Tech Stack{" "}
              <span className="notranslate text-black dark:text-white">⚙️</span>
            </h3>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              & Tools{" "}
              <span className="notranslate text-black dark:text-white">🛠️</span>
            </h3>
            <p className="text-muted-foreground text-base">
              Technologies and tools I've learned and experienced
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
          {/* Card - Left side in desktop */}
          <Card
            className="w-full xl:w-2/3 p-8"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <Tabs defaultValue="tech" className="w-full">
              <TabsList className="flex w-full mb-8 rounded-lg bg-muted p-1">
                <TabsTrigger
                  value="tech"
                  className="flex-1 rounded-md text-lg data-[state=active]:bg-primary"
                >
                  <Code className="w-5 h-5 mr-2" /> Tech Stack
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="flex-1 rounded-md text-lg data-[state=active]:bg-primary"
                >
                  <PencilRuler className="w-5 h-5 mr-2" /> Tools
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tech">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
                  {skillsData.tech.map((item, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-delay={500 + index * 100}
                    >
                      <SkillItem {...item} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tools">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
                  {skillsData.tools.map((item, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      data-aos-delay={500 + index * 100}
                    >
                      <SkillItem {...item} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Title - Right side in desktop, hidden on mobile */}
          <div
            className="hidden xl:flex xl:w-1/3 items-center"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Tech Stack 
                <span className="notranslate text-black dark:text-white">⚙️</span>
              </h3>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                & Tools 
                <span className="notranslate text-black dark:text-white">🛠️</span>
              </h3>

              <p className="text-muted-foreground text-lg">
                Technologies and tools I've learned and experienced
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
