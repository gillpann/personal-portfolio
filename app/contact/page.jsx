import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"

// components
import Form from "@/components/Form"

const Contact = () => {
    return (
        <section>
            <div className="container mx-auto">
                {/* text & illustration */}
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    {/* text */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4" data-aos="fade-down">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            Say Hello 👋
                        </div>
                        <h1 className="h1 max-w-md mb-8" data-aos="fade-right">Let's Work Together.</h1>
                        <p className="subtitle max-w-[400px]" data-aos="fade-up">If you have an exciting project or just want to say hi, I'm always open to new opportunities and connections.</p>
                    </div>
                    {/* illustration */}
                    <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat" data-aos="fade-left"></div>
                </div>
                {/* info text & form */}
                <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
                    {/* info text */}
                    <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg" data-aos="fade-up">
                        {/* mail */}
                        <div className="flex items-center gap-x-8">
                            <MailIcon size={18} className="text-primary"/>
                            <div>gpundong@gmail.com</div>
                        </div>
                        {/* phone */}
                        <div className="flex items-center gap-x-8">
                            <PhoneCall size={18} className="text-primary"/>
                            <div>+62 12345678</div>
                        </div>
                        {/* addres */}
                        <div className="flex items-center gap-x-8">
                            <HomeIcon size={18} className="text-primary"/>
                            <div>Bekasi, Indonesia</div>
                        </div>
                    </div>
                    <Form/>
                </div>
            </div>
        </section>
    )
}

export default Contact