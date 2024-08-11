import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader } from "./ui/card"
import { Github} from 'lucide-react'
import { Badge } from "./ui/badge"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog"
import { Button } from "./ui/button"
import { ArrowRightIcon } from "lucide-react";
import { Eye } from "lucide-react";

const truncateDescription = (description, maxWords = 10) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
};


const ProjectCard = ({project}) => {
    return (
        <Card className='group overflow-hidden relative'>
            <CardHeader className='p-0'>
                {/* image */}
                <div className="relative w-full h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 t">
                    <Image className="absolute bottom-0 shadow-2xl" src={project.image} width={300} height={300} alt="" priority/>
                    {/* overlay hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 transform translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300">
                        <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-white">
                            <Github className="h-12 w-12" />
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>{project.category}</Badge>
                <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg">{truncateDescription(project.description)}</p>

                {/* Modal */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="mt-4 gap-x-1 dark:text-white" onClick={() => console.log("Details button clicked")}>
                            Details <ArrowRightIcon size={18}/>
                            </Button>
                    </DialogTrigger>
                    <DialogContent className="dialog-content relative max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:text-white ">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-semibold">{project.name}</DialogTitle>
                            <DialogDescription>
                                <Image src={project.image} width={600} height={400} alt={project.name} className="w-full h-auto rounded-lg" />
                                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                            <Button asChild>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-x-1 dark:text-white">
                                    Preview <Eye size={18}/>
                                </a>
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </Card>
    )
}

export default ProjectCard