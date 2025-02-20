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
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border h-full">
              <h3
                className="text-2xl sm:text-3xl font-bold mb-6 text-primary"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                The Person Behind the Code
              </h3>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p className="text-lg" data-aos="fade-up" data-aos-delay="300">
                  Hello everyone👋!, As an intermediate-level developer, I am
                  constantly exploring new technologies and honing my skills.
                  I'm adaptable and can thrive in both solo and team
                  environments, always aiming to deliver exceptional results.
                </p>
              </div>
              <div className="space-y-4">
                <div
                  className="flex items-center gap-x-2 sm:gap-x-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <User className="text-primary" />
                  <span>{infoData.name}</span>
                </div>
                <div
                  className="flex items-center gap-x-2 sm:gap-x-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Mail className="text-primary" />
                  <span>{infoData.email}</span>
                </div>
                <div
                  className="flex items-center gap-x-2 sm:gap-x-3"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Home className="text-primary" />
                  <span>{infoData.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div data-aos="fade-up">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-x-2 sm:gap-x-3 text-center mb-8">
                <GraduationCap size={28} className="text-primary" />
                <h3 className="text-xl sm:text-2xl font-bold text-primary">
                  Education Journey
                </h3>
              </div>
              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <div
                    className="flex gap-x-8 group"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={700 + index * 100}
                  >
                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                      <div className="w-[9px] h-[9px] rounded-full bg-primary absolute -left-[4px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-xl leading-none mb-2">
                        {item.university}
                      </div>
                      <div className="text-lg leading-none text-muted-foreground mb-4">
                        {item.qualification}
                      </div>
                      <div className="text-base font-medium">{item.years}</div>
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
