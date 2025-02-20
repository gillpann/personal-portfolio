import { Briefcase, GraduationCap, Mail, Home, User } from "lucide-react";
import MarqueeDemo from "@/components/MarqueeDemo";

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

        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Column - Personal Info */}
          <div data-aos="fade-right">
            <div className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border border-border h-full">
              <h3
                className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary whitespace-nowrap text-center sm:text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                The Person Behind the Code
              </h3>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground mb-6 sm:mb-8">
                <p
                  className="text-sm sm:text-lg text-center sm:text-left leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Hello everyone👋! I'm a passionate and curious developer who
                  loves solving problems through code. As an intermediate-level
                  developer, I'm always eager to explore new technologies and
                  refine my skills. I thrive in both solo and collaborative
                  environments, constantly striving to deliver high-quality
                  results. Beyond coding, I enjoy learning about system design,
                  optimizing performance, and staying up-to-date with the latest
                  trends in tech.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div
                  className="flex items-center gap-x-2 sm:gap-x-3 text-sm sm:text-base justify-center sm:justify-start"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <User className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
                  <span>{infoData.name}</span>
                </div>
                <div
                  className="flex items-center gap-x-2 sm:gap-x-3 text-sm sm:text-base justify-center sm:justify-start"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Mail className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
                  <span>{infoData.email}</span>
                </div>
                <div
                  className="flex items-center gap-x-2 sm:gap-x-3 text-sm sm:text-base justify-center sm:justify-start"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Home className="text-primary w-5 sm:w-6 h-5 sm:h-6" />
                  <span>{infoData.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div data-aos="fade-up">
            <div className="bg-card rounded-xl p-4 sm:p-6 shadow-lg border border-border">
              <div className="flex items-center gap-x-2 md:gap-x-3 text-center sm:text-left mb-6 sm:mb-8">
                <GraduationCap size={24} className="text-primary" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                  Education Journey
                </h3>
              </div>
              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <div
                    className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 group"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={700 + index * 100}
                  >
                    <div className="h-[70px] sm:h-[84px] w-[1px] bg-border relative ml-2">
                      <div className="w-[7px] sm:w-[9px] h-[7px] sm:h-[9px] rounded-full bg-primary absolute -left-[3px] sm:-left-[4px] group-hover:translate-y-[70px] sm:group-hover:translate-y-[84px] transition-all duration-500"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg sm:text-xl leading-none mb-1 sm:mb-2">
                        {item.university}
                      </div>
                      <div className="text-base sm:text-lg leading-none text-muted-foreground mb-2 sm:mb-4">
                        {item.qualification}
                      </div>
                      <div className="text-sm sm:text-base font-medium">
                        {item.years}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section with Marquee */}
        <div className="mt-8 sm:mt-12" data-aos="fade-up">
          <div className="flex items-center gap-x-4 text-xl sm:text-2xl text-primary mb-6">
            <Briefcase size={28} />
            <h3 className="font-bold">Experience</h3>
          </div>
          <MarqueeDemo />
        </div>
      </div>
    </section>
  );
};

export default About;
