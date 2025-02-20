import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const experiences = [
  {
    title: "FrontEnd Developer",
    company: "ABC Corp",
    status: "Internship",
    duration: "October 2024 - January 2025",
    description:
      "Developed responsive UI components using React and Tailwind CSS.",
  },
  {
    title: "Software Engineer",
    company: "XYZ Tech",
    status: "Fulltime",
    duration: "March 2023 - Present",
    description: "Built scalable backend services with Node.js and PostgreSQL.",
  },
];

const ExperienceCard = ({ title, company, status, duration, description }) => {
  return (
    <figure
      className={cn(
        "relative w-60 sm:w-72 cursor-pointer overflow-hidden rounded-xl border p-3 sm:p-4 flex flex-col gap-1 sm:gap-2",
        "border-border bg-card hover:bg-accent hover:border-2 hover:border-primary"
      )}
    >
      <h3 className="text-lg sm:text-2xl font-bold text-foreground">{title}</h3>
      <p className="text-primary font-semibold text-sm sm:text-base">
        {company} <span className="text-muted-foreground">| {status}</span>
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground">{duration}</p>
      <p className="text-xs sm:text-sm text-accent-foreground">{description}</p>
    </figure>
  );
};



export default function ExperienceMarquee() {
  return (
    <div className="relative flex h-[180px] sm:h-[250px] w-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="sm:[--duration:20s] [--duration:15s]">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
    </div>
  );
};
