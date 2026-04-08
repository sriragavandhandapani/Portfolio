import React from 'react';
import { motion } from 'framer-motion';
import { training } from '../data';

const Training = () => {
    return (
        <section id="training" className="py-20 relative overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Training</span>
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        A timeline of my professional development and educational journey.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-fuchsia-500/50 via-pink-500/50 to-purple-500/50 transform md:-translate-x-1/2 rounded-full hidden md:block"></div>
                    <div className="absolute left-[39px] top-4 bottom-4 w-1 bg-gradient-to-b from-fuchsia-500/50 via-pink-500/50 to-purple-500/50 rounded-full md:hidden"></div>

                    <div className="space-y-12">
                        {training.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                    className={`relative flex items-center justify-between md:justify-normal w-full group ${
                                        isEven ? "md:flex-row-reverse" : ""
                                    }`}
                                >
                                    {/* Spacer for alternating layout on Desktop */}
                                    <div className="hidden md:block w-5/12"></div>

                                    {/* Center Dot */}
                                    <div className="z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-background border-4 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] transform -translate-x-[2px]"></div>

                                    {/* Mobile Dot */}
                                    <div className="z-20 flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-background border-4 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)] absolute left-[25px]"></div>

                                    {/* Content Card */}
                                    <div className="w-full md:w-5/12 ml-20 md:ml-0">
                                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-pink-500/10 transition-all group-hover:-translate-y-1 group-hover:border-pink-500/30 relative overflow-hidden">
                                            {/* Decorative gradient blob inside card */}
                                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl transition-all group-hover:bg-pink-500/20"></div>

                                            <div className="flex justify-between items-start mb-4 relative z-10">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-pink-400 font-semibold mb-1">
                                                        {item.institution}
                                                    </p>
                                                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-muted-foreground border border-white/10 mb-4">
                                                        {item.date}
                                                    </span>
                                                </div>
                                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-500 text-white text-xl shadow-lg shadow-pink-500/25 flex-shrink-0 ml-4">
                                                    {item.icon}
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed relative z-10 text-sm md:text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Training;
