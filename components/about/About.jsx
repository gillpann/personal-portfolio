import {
  Briefcase,
  GraduationCap,
  Mail,
  Home,
  User,
  Code,
  Star,
} from "lucide-react";
import MarqueeDemo from "@/components/about/MarqueeDemo";

const infoData = {
  name: "Satria Ahmad Gilvan Pundong",
  email: "gpundong@gmail.com",
  location: "Bekasi, Indonesia",
};

const educationData = [
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
];

const About = () => {
  return (
    <section id="about" className="py-10 xl:py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="section-title pt-4 mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info Card */}
          <div
            className="group bg-card rounded-xl p-6 shadow-lg border border-border h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl"
            data-aos="fade-right"
          >
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-primary flex items-center whitespace-nowrap gap-2 relative">
              <Code className="w-6 h-6" />
              The Person Behind the Code
              <Star className="w-2 h-2 sm:w-4 sm:h-4 absolute -top-1 -right-2 text-primary transition-all duration-500 group-hover:rotate-45 group-hover:scale-110" />
            </h3>
            <p className="text-muted-foreground text-center sm:text-left mb-6 leading-relaxed relative">
              Hello everyone👋! I'm a passionate and curious developer who loves
              solving problems through code. As an intermediate-level developer,
              I'm always eager to explore new technologies and refine my skills.
              I thrive in both solo and collaborative environments, constantly
              striving to deliver high-quality results. Beyond coding, I enjoy
              learning about system design, optimizing performance, and staying
              up-to-date with the latest trends in tech.
            </p>
            <div className="space-y-3 relative ">
              {[
                { icon: User, text: infoData.name },
                { icon: Mail, text: infoData.email },
                { icon: Home, text: infoData.location },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center sm:justify-start text-center sm:text-left gap-x-3 text-base group/item hover:text-primary transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/item:scale-110" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div
            className="group bg-card rounded-xl p-6 shadow-lg border border-border h-full relative overflow-hidden"
            data-aos="fade-left"
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-2 mb-6 relative">
              <GraduationCap className="text-primary w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-bold text-primary">
                Education Journey
              </h3>
            </div>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-6 pb-6 last:pb-0 group/item"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  {/* Timeline line with animation */}
                  <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-border overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/50 transform -translate-y-full group-hover/item:translate-y-0 transition-transform duration-500" />
                  </div>
                  {/* Timeline dot with pulse effect */}
                  <div className="absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full bg-primary">
                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                  </div>

                  <div className="space-y-1 transform transition-transform duration-300 group-hover/item:translate-x-1">
                    <h4 className="font-semibold text-lg">{item.university}</h4>
                    <p className="text-muted-foreground">
                      {item.qualification}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {item.years}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="md:col-span-2 mt-6" data-aos="fade-up">
            <div className="flex items-center gap-x-4 text-xl text-primary mb-6 group">
              <Briefcase className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              <h3 className="font-bold">Experience</h3>
            </div>
            <MarqueeDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
