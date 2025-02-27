"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Form from "./Form"; // Import Form component

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-tertiary dark:bg-secondary/40">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto relative px-6">
        <div className="grid xl:grid-cols-2 gap-x-12">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center mb-12 xl:mb-0">
            <div
              className="flex items-center gap-2 text-primary text-sm md:text-base mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold tracking-wider">Say Hello 👋</span>
            </div>

            <h1
              className="h1 font-bold mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Let's <span className="gradient-text">Work</span> Together
            </h1>

            <p
              className="text-muted-foreground text-base md:text-lg mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              If you have an exciting project or just want to say hi, I'm always
              open to new opportunities and connections. Let's transform your
              ideas into reality!
            </p>

            {/* Contact Info Boxes */}
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
              <ContactInfoBox
                iconSrc="/contact/gmail.png"
                title="Let's stay connected"
                content="gpundong@gmail.com"
              />
              <ContactInfoBox
                iconSrc="/contact/whatsapp.png"
                title="Need to talk? I'm here to chat"
                content="+62 12345678"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Form />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-24 h-16 md:h-24 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 md:w-32 h-24 md:h-32 bg-primary/10 rounded-full blur-xl"></div>
    </section>
  );
};

const ContactInfoBox = ({ iconSrc, title, content }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border group transition-all duration-300">
      <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        <Image
          src={iconSrc}
          alt={title}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div>
        <h4 className="font-medium text-lg">{title}</h4>
        <p className="text-muted-foreground">{content}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
    </div>
  );
};

export default Contact;
