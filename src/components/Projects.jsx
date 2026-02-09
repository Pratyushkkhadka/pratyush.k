import React, { useState } from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Flight Booking Platform',
            category: 'Web Application',
            description: 'Real-time flight price comparison engine with advanced filtering and booking capabilities.',
            tech: ['React', 'Node.js', 'MongoDB'],
            image: '/assets/images/flight_mockup.png',
            demo: '#',
            repo: 'https://github.com/pratyushkhadka/flight-booking',
            color: 'from-blue-500 to-cyan-400'
        },
        {
            id: 2,
            title: 'Student Management System',
            category: 'System Software',
            description: 'High-performance record management system built with C for optimized data handling.',
            tech: ['C', 'File I/O', 'Algorithms'],
            image: '/assets/images/student_mockup.png',
            demo: '#',
            repo: 'https://github.com/pratyushkhadka/student-system',
            color: 'from-emerald-500 to-teal-400'
        },
        {
            id: 3,
            title: 'Interactive Portfolio',
            category: 'Personal Brand',
            description: 'Modern developer portfolio consisting of parallax effects, and responsiveness.',
            tech: ['React', 'Tailwind', 'Motion'],
            image: '/assets/images/portfolio_mockup.png',
            demo: '#',
            repo: 'https://github.com/pratyushkhadka/portfolio',
            color: 'from-purple-500 to-pink-400'
        },
        {
            id: 4,
            title: 'Zodiac Sign Finder',
            category: 'CLI Application',
            description: 'A precise console-based utility built in C that determines zodiac signs and personality traits based on birth dates.',
            tech: ['C', 'Control Flow', 'CLI'],
            image: '/assets/images/zodiac_mockup.png',
            demo: '#',
            repo: 'https://github.com/pratyushkhadka/zodiac-finder',
            color: 'from-orange-500 to-yellow-400'
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 relative inline-block">
                            Featured Projects
                            <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-accent-primary rounded-full"></span>
                        </h2>
                        <p className="text-lg text-text-secondary max-w-xl">
                            A selection of projects that demonstrate my passion for building clean, scalable, and user-centric solutions.
                        </p>
                    </div>
                    {/* Decorative Code Snippet */}
                    <div className="hidden md:block font-mono text-xs text-text-secondary opacity-50 select-none">
                        &lt;Component name="Projects" /&gt;
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative bg-[#1e1e1e] border border-[#333] rounded-2xl overflow-hidden hover:border-accent-primary/50 transition-[transform,shadow,border-color,background-color] duration-500 shadow-xl hover:shadow-accent-primary/10 flex flex-col h-full smooth-render project-card"
                        >
                            {/* Window Header (Mac Style) */}
                            <div className="h-8 bg-[#252526] border-b border-[#333] flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                <div className="ml-auto text-[10px] items-center gap-2 font-mono text-gray-400 hidden sm:flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                    localhost:3000
                                </div>
                            </div>

                            {/* Project Preview */}
                            <div className="relative h-48 overflow-hidden bg-bg-secondary group-hover:bg-bg-primary transition-colors duration-300">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content Body */}
                            <div className="p-6 relative">
                                <span className={`text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2 block`}>
                                    {project.category}
                                </span>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-[11px] font-mono rounded bg-[#2d2d2d] text-gray-300 border border-[#3e3e42] badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-4 border-t border-[#333]">
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        Source
                                    </a>
                                    {project.demo !== '#' && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="ml-auto flex items-center gap-2 text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors"
                                        >
                                            Live Demo
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
