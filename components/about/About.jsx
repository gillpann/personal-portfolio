"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExperienceMarquee from "@/components/about/ExperienceMarquee";
import {
  User2,
  MailIcon,
  HomeIcon,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Lanyard from "@/components/about/Lanyard";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Satria Ahmad Gilvan Pundong",
  },
  {
    icon: <MailIcon size={20} />,
    text: "gpundong@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Bekasi, Indonesia",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Gunadarma University",
        qualification: "Bachelor of Informatics Engineering",
        years: "2023 - present",
      },
      {
        university: "SMAN 3 Tambun Selatan",
        qualification: "Science Major",
        years: "2020 - 2023",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section id="about" className="py-6 xl:py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="section-title pt-4 mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
      </div>
      <div
        className="flex flex-col xl:flex-row"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Lanyard */}
        <div className="hidden xl:flex flex-1 relative justify-center">
          <Lanyard
            position={[0, 0, 15]}
            gravity={[0, -40, 0]}
            fov={[20]}
          />
        </div>
        {/* tabs */}
        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList
              className="w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                className="w-[162px] xl:w-auto"
                value="qualifications"
              >
                Education
              </TabsTrigger>
            </TabsList>
            {/* tabs content */}
            <div className="text-lg ml-4 mt-12 xl:mt-8">
              {/* personal */}
              <TabsContent value="personal" data-aos="fade-up">
                <div className="text-center xl:text-left">
                  <h3
                    className="h3 mb-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    The Person Behind the Code
                  </h3>
                  <p
                    className="subtitle max-w-xl mx-auto text-justify xl:mx-0 px-5 xl:px-0"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Hello everyone! I'm a passionate and curious developer who
                    loves solving problems through code. As an
                    intermediate-level developer, I'm always eager to explore
                    new technologies and refine my skills. I thrive in both solo
                    and collaborative environments, constantly striving to
                    deliver high-quality results. Beyond coding, I enjoy
                    learning about system design, optimizing performance, and
                    staying up-to-date with the latest trends in tech.
                  </p>
                  {/* icons */}
                  <div className="grid xl:grid-cols-2 gap-4 mb-12">
                    {infoData.map((item, index) => {
                      return (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                          data-aos="fade-up"
                          data-aos-delay={600 + index * 100}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>

              {/* Education */}
              <TabsContent
                value="qualifications"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <div
                    className="flex items-center gap-x-4 text-[22px] text-primary mb-8"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <GraduationCap size={28} />
                    <h3 className="capitalize font-medium">Education</h3>
                  </div>
                  {/* education */}
                  <div className="flex flex-col gap-y-8">
                    {getData(qualificationData, "education").data.map(
                      (item, index) => {
                        const { university, qualification, years } = item;
                        return (
                          <div
                            className="flex gap-x-8 group"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={500 + index * 200}
                          >
                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                              <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                            </div>
                            <div>
                              <div className="font-semibold text-xl leading-none mb-2">
                                {university}
                              </div>
                              <div className="text-lg leading-none text-muted-foreground mb-4">
                                {qualification}
                              </div>
                              <div className="text-base font-medium">
                                {years}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Experience Marquee */}
      <div
        className="container mx-auto mt-8 xl:mt-12"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          className="flex items-center gap-x-4 text-[22px] text-primary mb-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Briefcase size={28} />
          <h3 className="capitalize font-medium">Experience</h3>
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <ExperienceMarquee />
        </div>
      </div>
    </section>
  );
};

export default About;
