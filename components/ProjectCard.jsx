import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, ExternalLink, Info, X } from "lucide-react";
import { Badge } from "./ui/badge";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project }) => {
    const hasLink = project.link && project.link !== "/";
    const hasGithub = project.github && project.github !== "/";

    return (
        <Card className="group overflow-hidden relative">
            <Badge className="absolute top-4 left-4 z-10 uppercase text-sm font-medium">
                {project.category}
            </Badge>
            
            <CardHeader className="p-0">
                <div className="relative w-full h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40">
                    <Image
                        className="absolute bottom-0 shadow-2xl"
                        src={project.image}
                        width={300}
                        height={300}
                        alt={project.name}
                        priority
                    />
                </div>
            </CardHeader>
            
            <div className="h-full px-6 py-4">
                <h4 className="text-xl font-bold mb-3">{project.name}</h4>
                
                {/* Tech Stack with Icons */}
                <div className="flex flex-wrap gap-3 mb-4">
                    {project.techStack?.map((tech, index) => (
                        <div key={index} className="flex items-center gap-1">
                            <Image 
                                src={`/tech/${tech.icon}`}
                                width={20}
                                height={20}
                                alt={tech.name}
                                className="w-5 h-5"
                            />
                            <span className="text-sm text-muted-foreground">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="sm" variant="outline" className="gap-2 bg-primary hover:bg-primary/90 text-white dark:text-black">
                                <Info className="h-4 w-4" />
                                Details
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl bg-background/90 backdrop-blur-lg">
                            <DialogHeader>
                                <div className="flex justify-between items-center">
                                    <DialogTitle className="text-2xl font-bold">
                                        {project.name}
                                    </DialogTitle>
                                </div>
                            </DialogHeader>
                            
                            <div className="mt-4">
                                <Image
                                    src={project.image}
                                    width={800}
                                    height={400}
                                    alt={project.name}
                                    className="w-full h-auto rounded-lg"
                                />
                                
                                <div className="flex flex-wrap gap-3 my-4">
                                    {project.techStack?.map((tech, index) => (
                                        <div key={index} className="flex items-center gap-1">
                                            <Image 
                                                src={`/tech/${tech.icon}`}
                                                width={20}
                                                height={20}
                                                alt={tech.name}
                                                className="w-5 h-5"
                                            />
                                            <span className="text-sm">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                
                                <DialogDescription className="text-base">
                                    {project.description}
                                </DialogDescription>
                            </div>
                            
                            <div className="flex justify-between items-center mt-6">
                                <DialogClose asChild>
                                    <Button variant="destructive" size="sm" className="gap-2">
                                        Close
                                        <X className="h-4 w-4 items-center" />
                                    </Button>
                                </DialogClose>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Button
                        size="sm"
                        variant="outline"
                        className={cn(
                            "gap-2",
                            !hasLink && "opacity-50 cursor-not-allowed"
                        )}
                        asChild={hasLink}
                        disabled={!hasLink}
                    >
                        {hasLink ? (
                            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <ExternalLink className="h-4 w-4" />
                                Preview
                            </Link>
                        ) : (
                            <span className="flex items-center gap-2">
                                <ExternalLink className="h-4 w-4" />
                                Preview
                            </span>
                        )}
                    </Button>

                    <Button
                        size="sm"
                        variant="outline"
                        className={cn(
                            "px-3",
                            !hasGithub && "opacity-50 cursor-not-allowed" 
                        )}
                        asChild={hasGithub}
                        disabled={!hasGithub}
                    >
                        {hasGithub ? (
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                            </Link>
                        ) : (
                            <span>
                                <Github className="h-4 w-4" />
                            </span>
                        )}
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;