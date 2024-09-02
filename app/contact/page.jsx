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
                <div
                className="flex items-center gap-x-4 text-primary text-lg mb-4"
                data-aos="fade-down"
                >
                <span className="w-[30px] h-[2px] bg-primary"></span>
                Say Hello 👋
                </div>
                <h1 className="h1 max-w-md mb-8" data-aos="fade-right">
                Let's Work Together.
                </h1>
                <p className="subtitle max-w-[400px]" data-aos="fade-up">
                If you have an exciting project or just want to say hi, I'm always
                open to new opportunities and connections.
                </p>
            </div>
            {/* illustration */}
            <div
                className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"
                data-aos="fade-left"
            ></div>
            </div>
            {/* text info & form */}
            <div className="grid xl:grid-cols-2 gap-x-8 mb-24 xl:mb-32">
            {/* text info */}
            <div
                className="flex flex-col gap-y-6 mb-12 xl:mb-24"
                data-aos="fade-up"
            >
                {/* email */}
                <InfoBox
                iconSrc="/contact/gmail.png"
                title="Let's stay connected:"
                content="gpundong@gmail.com"
                />
                {/* telepon */}
                <InfoBox
                iconSrc="/contact/whatsapp.png"
                title="Need to talk? I'm here to chat"
                content="+62 12345678"
                />
                {/* alamat */}
                <InfoBox
                iconSrc="/contact/home.png"
                title="Find me at:"
                content="Bekasi, Indonesia"
                />
            </div>
            <Form />
            </div>
        </div>
        </section>
    );
    };

    const InfoBox = ({ iconSrc, title, content }) => {
    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 relative overflow-hidden group">
        <div className="flex items-center gap-x-4">
            <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
            <img src={iconSrc} alt={title} width={50} height={50} />
            </div>
            <div className="flex flex-col">
            <div className="font-semibold text-lg">{title}</div>
            <div className="text-gray-600 dark:text-gray-400">{content}</div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
        </div>
    );
    };

export default Contact