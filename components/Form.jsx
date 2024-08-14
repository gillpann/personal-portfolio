"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("Sending...");


        if (!formData.name || !formData.email || !formData.message) {
        setSubmitStatus("Please fill in all fields.");
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
            setSubmitStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            throw new Error("Error sending message");
        }
        } catch (error) {
        console.error("Error sending message:", error);
        setSubmitStatus("Error sending message.");
        } finally {
        setIsSubmitting(false);
        }
    };

    return (
        <form
        className="flex flex-col gap-y-4"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        >
        {/* Input for Name */}
        <div className="relative flex items-center">
            <Input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            />
            <User className="absolute right-6" size={20} />
        </div>

        {/* Input for Email */}
        <div className="relative flex items-center">
            <Input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            />
            <MailIcon className="absolute right-6" size={20} />
        </div>

        {/* Textarea for Message */}
        <div className="relative flex items-center">
            <Textarea
            id="message"
            placeholder="Type Your Message Here."
            value={formData.message}
            onChange={handleChange}
            />
            <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>

        {/* Submit Button */}
        <Button
            className="flex items-center gap-x-1 max-w-[166px]"
            type="submit"
            disabled={isSubmitting}
            data-aos="zoom-in"
        >
            {isSubmitting ? "Sending..." : "Let's Talk"}
            <ArrowRightIcon size={20} />
        </Button>

        {/* Status Message */}
        {submitStatus && <p className="mt-2 text-center">{submitStatus}</p>}
        </form>
    );
};

export default Form;
