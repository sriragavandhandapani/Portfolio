import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: "https://github.com/sriragavandhandapani/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sriragavand/", label: "LinkedIn" }
];

const Typewriter = ({ text, delay = 0 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false); // Start false to handle initial delay

    useEffect(() => {
        // Initial start delay
        const startTimeout = setTimeout(() => {
            setIsTyping(true);
        }, delay * 1000);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!isTyping) return;

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 40); // Typing speed
            return () => clearTimeout(timeout);
        } else {
            // Finished typing, wait then reset
            const timeout = setTimeout(() => {
                setCurrentText('');
                setCurrentIndex(0);
                // No need to set isTyping false unless we want another delay, loop immediately
            }, 3000); // 3s wait
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, isTyping, text]);

    return (
        <span className="inline-block">
            {currentText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] h-[1em] bg-pink-500 ml-1 align-middle"
            />
        </span>
    );
};

const Hero = () => {
    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left content (Text) */}
                    <div className="flex-1 text-left lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex justify-center lg:justify-start"
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-muted-foreground">
                                Available for new projects
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            Building digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">experiences</span> that matter.
                        </motion.h1>

                        <div className="mb-12">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.2 }}
                                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                            >
                                <Typewriter
                                    text="I'm Ragav, a design-minded fullstack engineer focused on building beautiful interfaces & robust systems."
                                    delay={0.55}
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        >
                            <a
                                href="#projects"
                                className="group relative px-8 py-4 bg-foreground text-background font-medium rounded-full overflow-hidden transition-transform hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>

                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-full border border-border hover:bg-secondary/50 transition-colors font-medium text-foreground"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div
                            className="mt-12 flex justify-center lg:justify-start gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300"
                                    aria-label={link.label}
                                >
                                    <link.icon size={18} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right content (Image) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full p-2 bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-purple-500 group">
                            <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-background relative z-10 bg-background/50">
                                <img
                                    src="/images/profile.png"
                                    alt="Ragav"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Decorative glow and orbits behind image */}
                            <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-2xl -z-10 group-hover:bg-pink-500/50 transition-colors duration-500" />
                            <div className="absolute -inset-4 md:-inset-8 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute -inset-8 md:-inset-16 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
