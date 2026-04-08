import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificatesData = [
    {
        title: "Full Stack Web Development",
        issuer: "Coursera",
        date: "2024",
        link: "#"
    },
    {
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "2024",
        link: "#"
    },
    {
        title: "Cloud Computing Basics",
        issuer: "AWS",
        date: "2023",
        link: "#"
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-32 px-6 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -translate-y-1/2" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
                        Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Achievements</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Continuous learning and professional development to stay ahead in the tech landscape.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificatesData.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-card border border-border/50 hover:border-pink-500/50 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <Award className="w-10 h-10 text-pink-500 mb-6" />

                                <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="flex items-center justify-between text-sm text-muted-foreground mt-4 pt-4 border-t border-border/50">
                                    <span className="font-medium text-foreground">{cert.issuer}</span>
                                    <span>{cert.date}</span>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
