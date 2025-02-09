"use client";
import { useState, useEffect, useRef } from "react";
import { Bot, X, Send, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { botResponses } from "@/data/responses";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const [language, setLanguage] = useState('en');
    const chatContainerRef = useRef(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (
            isOpen &&
            chatContainerRef.current &&
            !chatContainerRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const detectLanguage = (message) => {
        const lowercaseMessage = message.toLowerCase();
        const isIndonesian = botResponses.indonesianKeywords.some(keyword =>
        lowercaseMessage.includes(keyword)
        );
        return isIndonesian ? 'id' : 'en';
    };

    const handleToggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const detectedLang = detectLanguage(inputMessage);
        setLanguage(detectedLang);

        setMessages((prev) => [
        ...prev,
        {
            type: "user",
            content: inputMessage,
        },
        ]); 

    setIsThinking(true);
    setInputMessage("");

        setTimeout(() => {
        let response = botResponses.default;
        const lowercaseInput = inputMessage.toLowerCase();

        const matchedResponse = botResponses.matchResponses.find(item =>
            item.keywords.some(keyword => lowercaseInput.includes(keyword))
        );

        if (matchedResponse) {
            response = botResponses[matchedResponse.responseKey];
        }

        setMessages((prev) => [
            ...prev,
            {
            type: "bot",
            content: response.response(detectedLang),
            },
        ]);
        setIsThinking(false);
        }, 1500);
    };    

    const WelcomeScreen = () => (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 space-y-6 text-center flex-1 flex flex-col justify-center items-center"
        >
        <motion.div
            animate={{
            y: [0, -10, 0],
            }}
            transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
            }}
            className="bg-primary/10 p-6 rounded-full"
        >
            <Bot size={48} className="text-primary" />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <h4 className="text-2xl font-semibold text-primary">Ask Me Anything!</h4>
            <p className="text-muted-foreground mt-2">
            Feel free to ask about my skills, projects, and experiences.
            I can chat in English or Bahasa Indonesia!
            </p>
        </motion.div>
        </motion.div>
    );    

    return (
        <>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleToggleChat}
            className="fixed left-4 md:left-8 bottom-6 z-40 bg-primary text-white p-3 md:p-4 rounded-full shadow-lg"
        >
            <Bot className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>

        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 20 }}
                ref={chatContainerRef}
                className="fixed left-0 bottom-0 w-full md:w-[400px] h-[70vh] md:h-[600px] bg-background/95 backdrop-blur-lg border shadow-2xl z-[100]"
            >
                <div className="flex items-center justify-between p-4 border-b bg-primary/95 text-white backdrop-blur-lg">
                <div className="flex items-center gap-2">
                    <Bot size={24} />
                    <h3 className="font-semibold">Ask Me Anything</h3>
                </div>
                <button onClick={handleToggleChat} className="hover:opacity-80">
                    <X size={24} />
                </button>
                </div>

                <div className="h-[calc(100%-130px)] flex flex-col">
                {messages.length === 0 && (
                    <WelcomeScreen />
                )}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                        <div
                        key={index}
                        className={`flex ${
                            message.type === "user" ? "justify-end" : "justify-start"
                        }`}
                        >
                        <div className="max-w-[85%]">
                            <small className="block mb-1 text-muted-foreground text-xs">
                            {message.type === "user" ? "You" : "Gilvan"}
                            </small>
                            <div
                            className={`p-3 rounded-lg ${
                                message.type === "user"
                                ? "bg-primary text-primary-foreground rounded-br-none"
                                : "bg-muted text-muted-foreground rounded-bl-none"
                            }`}
                            >
                            {message.content}
                            </div>
                        </div>
                        </div>
                    ))}
                    {isThinking && (
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Bot size={16} />
                        <span className="animate-pulse">Thinking...</span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                    </div>
                </div>

                <form
                onSubmit={handleSendMessage}
                className="border-t p-4 bg-background/50 backdrop-blur-lg"
                >
                <div className="flex gap-2">
                    <button
                    type="button"
                    onClick={() => setInputMessage("")}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    disabled={!inputMessage}
                    >
                    <Trash2 size={18} />
                    </button>
                    <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <button
                    type="submit"
                    className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    disabled={!inputMessage}
                    >
                    <Send size={18} />
                    </button>
                </div>
                </form>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

export default ChatBot;