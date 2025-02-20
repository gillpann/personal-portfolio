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
        "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col gap-2",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "hover:border-2 hover:border-primary"
      )}
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-primary font-semibold">
        {company}{" "}
        <span className="text-gray-600 dark:text-gray-400">| {status}</span>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </figure>
  );
};

export default function ExperienceMarquee() {
  return (
    <div className="relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
