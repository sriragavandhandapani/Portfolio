import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/sriragavandhandapani/", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/sriragavand/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:sriragavandhandapani@gmail.com", label: "Email" }
    ];

    const quickLinks = ['About', 'Skills', 'Projects', 'Training', 'Certificates', 'Contact'];

    return (
        <footer className="bg-background border-t border-white/10 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 py-12 lg:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                    
                    {/* Column 1: Brand & Bio */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <a href="#" className="font-display font-bold text-3xl tracking-tighter mb-4 hover:opacity-80 transition-opacity">
                            RAGAV<span className="text-pink-500">.DEV</span>
                        </a>
                        <p className="text-muted-foreground mb-6 max-w-sm">
                            Passionate full-stack developer and problem solver building innovative solutions for a better tomorrow.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:scale-110 transition-all duration-300 shadow-sm"
                                    aria-label={link.label}
                                >
                                    <link.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold mb-6 text-foreground">Quick Links</h3>
                        <ul className="flex flex-col gap-3 items-center md:items-start">
                            {quickLinks.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-muted-foreground hover:text-pink-500 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-xl font-bold mb-6 text-foreground">Contact Info</h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a href="mailto:sriragavandhandapani@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-pink-500 transition-colors group">
                                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                                    <span>sriragavandhandapani@gmail.com</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground justify-center md:justify-start">
                                <Phone size={18} className="text-pink-500" />
                                <span>+91 7904403415</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground justify-center md:justify-start">
                                <MapPin size={18} className="text-pink-500" />
                                <span>Jalandhar, Punjab</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                {/* <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center gap-2">
                    <p className="text-muted-foreground text-sm text-center">
                        © {new Date().getFullYear()} Sriragavandhandapani. All rights reserved.
                    </p>
                    <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
                        Built with <span className="text-pink-500 text-lg">❤️</span> using React, Tailwind CSS & Framer Motion
                    </p>
                </div> */}
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-600 to-pink-600 text-white shadow-lg shadow-pink-500/25 z-50 transition-all duration-500 hover:-translate-y-1 hover:shadow-pink-500/40 ${
                    showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none hidden'
                }`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} />
            </button>
        </footer>
    );
};

export default Footer;

