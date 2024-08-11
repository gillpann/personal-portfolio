import {GanttChartSquare, Blocks, Gem} from 'lucide-react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'Web Development',
        description: 'Transform your vision into a functional and responsive website. I specialize in creating modern and scalable web applications tailored to your specific needs, using the latest technologies and best practices in the industry.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: 'App Development',
        description: 'Bring your ideas to life with custom app development. Whether you need a mobile app or a cross-platform solution, I offer comprehensive services that cover everything from concept to deployment, ensuring a seamless user experience.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8}/>,
        title: 'Web Design',
        description: 'Craft stunning and intuitive designs that captivate your audience. I provide creative and innovative design solutions that enhance your brand`s online presence, focusing on user-centric interfaces and visually appealing layouts.',
    },
]


const Services = () => {
    return (
        <section className='mb-4 xl:mb-8'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
                {/* grid items */}
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {servicesData.map((item, index) => {
                        return <Card className='w-full max-w-[424px] h-auto flex flex-col justify-center items-center p-4' key={index}>
                            <CardHeader className='text-primary flex justify-center items-center mb-4'>
                                <div className='w-[100px] h-[100px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services