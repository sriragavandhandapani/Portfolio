import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-6'}`}
        >
            <div className={`
                flex items-center justify-between w-full max-w-5xl 
                px-6 py-3 rounded-full 
                ${scrolled ? 'bg-pink-500/10 backdrop-blur-md border border-pink-500/20 shadow-[0_8px_32px_0_rgba(236,72,153,0.1)]' : 'bg-transparent border border-transparent'}
                transition-all duration-300 mx-4 md:mx-0
            `}>
                <a href="#" className="font-display font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
                    RAGAV<span className="text-pink-500">.DEV</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {['About', 'Skills', 'Projects', 'Training', 'Certificates', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-medium text-muted-foreground hover:text-pink-500 transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">

                    <button
                        className="md:hidden text-foreground hover:text-pink-500 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <a
                        href="/Resume/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center justify-center bg-pink-500 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-pink-600 transition-all shadow-md hover:shadow-pink-500/25"
                    >
                        Resume
                    </a>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-24 left-4 right-4 p-6 bg-card/95 backdrop-blur-xl border border-pink-500/20 rounded-2xl shadow-2xl flex flex-col gap-4 md:hidden"
                    >
                        {['About', 'Skills', 'Projects', 'Training', 'Certificates', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-foreground hover:text-pink-500 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
