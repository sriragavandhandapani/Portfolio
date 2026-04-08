import React, { useState } from 'react';
import { projects } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-32 px-6 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A collection of projects exploring modern web technologies and design patterns.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-card-${index}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:border-primary/50 transition-colors"
                        >
                            <div className="aspect-video bg-muted/50 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity z-10" />
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                                        {project.title[0]}
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold leading-tight group-hover:text-blue-500 transition-colors">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{project.tech[0]} • {project.tech[1]}</p>
                                    </div>
                                    <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                                <p className="text-muted-foreground line-clamp-2 text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-card border border-border rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto flex flex-col z-10"
                        >
                            <div className="aspect-video bg-muted relative shrink-0 overflow-hidden">
                                {selectedProject.image ? (
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8">
                                <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tech.map((tech) => (
                                        <span key={tech} className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="prose prose-invert max-w-none text-muted-foreground mb-8">
                                    <p>{selectedProject.description}</p>
                                    <p className="mt-4">{selectedProject.longDescription}</p>
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                                    >
                                        <ExternalLink size={18} /> Visit Site
                                    </a>
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-input hover:bg-secondary/50 transition-colors font-medium"
                                    >
                                        <Github size={18} /> View Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
