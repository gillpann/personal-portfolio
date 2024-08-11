import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "JavaScript",
    description: "Advanced",
    img: "/skills/javascript.png",
  },
  {
    name: "Python",
    description: "Intermediate",
    img: "/skills/python.png",
  },
  {
    name: "Java",
    description: "Intermediate",
    img: "/skills/java.png",
  },
  {
    name: "Bootstrap",
    description: "Advanced",
    img: "/skills/bootstrap.png",
  },
  {
    name: "React JS",
    description: "Intermediate",
    img: "/skills/react.png",
  },
  {
    name: "Golang",
    description: "Basic",
    img: "/skills/go.png",
  },
  {
    name: "Next JS",
    description: "Intermediate",
    img: "/skills/nextjs.png",
  },
  {
    name: "Tailwind CSS",
    description: "Advanced",
    img: "/skills/tailwind.png",
  },
  {
    name: "MySQL",
    description: "Intermediate",
    img: "/skills/mysql.png",
  },
  {
    name: "PHP",
    description: "Intermediate",
    img: "/skills/php.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, description }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 flex items-center gap-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        // border
        "hover:border-2 hover:border-primary dark:hover:border-primary"
      )}
    >
      <img
        className="rounded-full w-16 h-16 object-cover"
        src={img}
        alt={name}
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold dark:tex-white">{name}</h3>
        <p className="text-sm font-medium text-muted-foreground overflow-hidden whitespace-nowrap">
          {description}
        </p>
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        {/* tadi hapus justify-center di atas  */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
