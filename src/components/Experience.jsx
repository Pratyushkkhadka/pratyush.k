import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            date: 'January 2025 – Present',
            title: 'IT Support Assistant',
            company: 'Aroma Travel',
            description: 'Supporting daily IT operations by helping staff with technical issues, maintaining computer systems, and ensuring booking and office software work smoothly. Handling basic hardware and software troubleshooting, assisting with system setup, and supporting everyday technical needs of the travel business.',
            tags: ['IT Support', 'Hardware & Software Troubleshooting', 'Office & Booking Systems', 'Basic Networking & Security']
        },
        {
            id: 2,
            date: '2024',
            title: 'Freelance Web Developer',
            company: 'Self-Employed',
            description: 'Successfully delivered custom web solutions for diverse clients, specializing in modern, responsive websites and landing pages. Managed complete project lifecycles from requirements gathering to deployment, ensuring client satisfaction and timely delivery.',
            tags: ['Client Management', 'HTML/CSS/JavaScript', 'Responsive Design']
        }
    ];

    return (
        <section id="experience" className="min-h-screen p-6 md:p-12 lg:p-24 smooth-render">
            <h2 className="text-3xl font-semibold mb-2 text-accent-primary">Professional Journey</h2>
            <p className="text-lg text-text-primary mb-12">Experience across IT support, cybersecurity fundamentals, and web development</p>

            <div className="relative pl-10 border-l-[3px] border-accent-primary ml-4 md:ml-0 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={exp.id} className="relative group">
                        {/* Timeline Marker */}
                        <div className="absolute -left-[49px] top-0 w-4 h-4 rounded-full bg-accent-primary border-[3px] border-bg-primary group-hover:scale-125 transition-transform duration-200"></div>

                        <div className="bg-bg-secondary p-6 rounded-xl border border-border-color hover:border-accent-primary transition-colors duration-300 shadow-sm hover:shadow-lg">
                            <span className="text-sm font-bold text-accent-primary block mb-2">{exp.date}</span>
                            <h3 className="text-xl font-bold text-text-primary mb-1">{exp.title} – {exp.company}</h3>
                            <p className="text-text-primary mb-4 leading-relaxed">{exp.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-bg-primary rounded-full text-xs font-medium text-text-primary border border-border-color badge">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
