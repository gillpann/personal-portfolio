import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Briefcase} from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Satria Ahmad Gilvan  Pundong',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+62 12345678',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'gpundong@gmail.com',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Computer Science Student',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Bekasi, Indonesia',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Gunadarma University',
                qualification: 'Bachelor of Informatics Engineering',
                years: '2023 - present',
            },
            {
                university: 'SMAN 3 Tambun Selatan',
                qualification: 'Science Major',
                years: '2020 - 2023',
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'ABC Inc.',
                role: 'Full Stack Developer',
                years: '2024 - 2025',
            },
            {
                company: 'XYZ Corporation',
                role: 'Software Engineer',
                years: '2025 - present',
            },
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Programming Languages',
            },
            {
                name: 'FrameWork & Libraries',
            },
            {
                name: 'Databases',
            },
            {
                name: 'UI/UX Design',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/git.svg',
            },
            {
                imgPath: '/about/github.svg',
            },
        ]
    },

];


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    // console.log(getData(qualificationData, "experience"));
    
    return (
        <section className="py-12 xl:py-20" >
            <div className="container mx-auto" data-aos="fade-up">
                <h2 className="section-title pt-4 mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            </div>
            <div className="flex flex-col xl:flex-row gap-y-8 xl:gap-x-8">
                {/* image */}
                <div className="flex-1 relative justify-center" data-aos="fade-right">
                    {/* SVG for Light Theme */}
                    <img src="/about/dev-light.svg" alt="Ilustrasi Gilvan Light Theme" className="w-full h-auto max-w-[400px mx-auto dark:hidden"/>

                    {/* SVG for Dark Theme */}
                    <img src="/about/dev-dark.svg" alt="Ilustrasi Gilvan Dark Theme" className="w-full h-auto max-w-[400px mx-auto hidden dark:block"/>
                </div>
                {/* tabs */}
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none' data-aos="zoom-in-up">
                            <TabsTrigger className='w-[162px] xl:w-auto' value="personal">Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value="qualifications">Qualfications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value="skills">Tech Stack</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className="text-lg ml-4 mt-12 xl:mt-8">
                            {/* personal */}
                            <TabsContent value="personal" data-aos="fade-up">
                                <div className="text-center xl:text-left"  data-aos="fade-up">
                                    <h3 className="h3 mb-4">The Person Behind the Code</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0 px-5 xl:px-0">Hello everyone! As an intermediate-level developer, I am constantly exploring new technologies and honing my skills. I'm adaptable and can thrive in both solo and team environments, always aiming to deliver exceptional results</p>
                                    {/* icons */}
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item, index) => {
                                            return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div className="text-primary">{item.icon}</div> 
                                                <div>{item.text}</div>
                                            </div>
                                        })}
                                            
                                        
                                    </div>
                                </div>
                            </TabsContent>
                            {/* qualifications */}
                            <TabsContent value="qualifications">
                                <div  data-aos="fade-up">
                                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                    {/* experience & education */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* experience */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex items-center gap-x-4 text-[22px] text-primary">
                                                <Briefcase />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'experience').data.map((item, index) => {
                                                    const {company, role, years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* education */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex items-center gap-x-4 text-[22px] text-primary">
                                                <GraduationCap size={28} />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'education').data.map((item, index) => {
                                                    const {university, qualification, years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* skills */}
                            <TabsContent value="skills">
                                <div className="text-center xl:text-left" data-aos="fade-up">
                                    <h3 className="h3 mb-8">My Core Technologies & Skills</h3>
                                    <div className='mb-16'>
                                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                        <div className="w-full max-w-md">
                                            <div className="border-b border-border mb-4"></div>
                                        </div>
                                        {/* skills list */}
                                        <div>
                                            {getData(skillData, 'skills').data.map((item, index) => {
                                                const { name } = item;
                                                return (
                                                <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                    <div className='font-medium'>{name}</div>
                                                </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {/* tools */}
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                        <div className="w-full max-w-md">
                                            <div className="border-b border-border mb-4"></div>
                                        </div>
                                        {/* tools list */}
                                        <div className="flex gap-x-8 justify-center xl:justify-start">
                                            {getData(skillData, 'tools').data.map((item, index) => {
                                                const {imgPath} = item;
                                                return <div key={index}>
                                                    <Image src={imgPath} width={48} height={48} alt="" priority/>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default About