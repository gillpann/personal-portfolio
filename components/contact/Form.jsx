"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { useToast } from "../ui/use-toast";

const Form = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.name || !formData.email || !formData.message) {
            toast({
                variant: "destructive",
                title: "Validation Error",
                description: "Please fill in all fields.",
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({
                    variant: "success",
                    title: "Success!",
                    description: "Your message has been sent. I'll get back to you soon!",
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Error sending message");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast({
                variant: "destructive",
                title: "Sending Failed",
                description: "There was an error sending your message. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            className="flex flex-col gap-y-6"
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-delay="200"
        >
            <div className="space-y-4">
                {/* Input for Name */}
                <div 
                    className="relative group" 
                    data-aos="fade-up" 
                    data-aos-delay="300"
                >
                    <Input
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background/50 border-muted-foreground/20 h-12 px-6 transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary hover:border-primary/50 rounded-xl"
                    />
                    <User className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-hover:text-primary/70 transition-colors duration-300" size={18} />
                </div>

                {/* Input for Email */}
                <div 
                    className="relative group" 
                    data-aos="fade-up" 
                    data-aos-delay="400"
                >
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background/50 border-muted-foreground/20 h-12 px-6 transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary hover:border-primary/50 rounded-xl"
                    />
                    <MailIcon className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-hover:text-primary/70 transition-colors duration-300" size={18} />
                </div>

                {/* Textarea for Message */}
                <div 
                    className="relative group" 
                    data-aos="fade-up" 
                    data-aos-delay="500"
                >
                    <Textarea
                        id="message"
                        placeholder="Type Your Message Here."
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-background/50 border-muted-foreground/20 min-h-[180px] px-6 py-4 transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary hover:border-primary/50 resize-none rounded-xl"
                    />
                    <MessageSquare className="absolute right-6 top-6 text-muted-foreground/50 group-hover:text-primary/70 transition-colors duration-300" size={18} />
                </div>
            </div>

            {/* Submit Button */}
            <Button
                className="flex items-center gap-x-2 bg-primary hover:bg-primary/90 text-white px-8 py-6 h-12 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                type="submit"
                disabled={isSubmitting}
                data-aos="zoom-in"
                data-aos-delay="600"
            >
                <span className="text-sm font-medium">
                    {isSubmitting ? "Sending..." : "Let's Talk"}
                </span>
                <ArrowRightIcon size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
        </form>
    );
};

export default Form;