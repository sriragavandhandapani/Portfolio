import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            // console.error('Error:', error);
            // alert('An error occurred. Please try again.');
        }
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/sriragavandhandapani/", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/sriragavand/", label: "LinkedIn" }
    ];

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold font-display mb-4"
                        >
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">Touch</span>
                        </motion.h2>
                        <p className="text-muted-foreground max-w-lg mx-auto">
                            Have a project in mind or just want to say hi? I'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                        {/* Contact Info */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-white">Contact Info</h3>
                                <div className="space-y-6">
                                    <a href="mailto:sriragavandhandapani@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-pink-400 transition-colors group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 transition-colors">
                                            <Mail size={20} />
                                        </div>
                                        <span>sriragavandhandapani</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-pink-400 transition-colors group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 transition-colors">
                                            <MapPin size={20} />
                                        </div>
                                        <span>Jalandhar, Punjab</span>
                                    </a>
                                    <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-pink-400 transition-colors group">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 transition-colors">
                                            <Phone size={20} />
                                        </div>
                                        <span>+91 7904403415</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Follow Me</h4>
                                <div className="flex gap-4">
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
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-pink-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
