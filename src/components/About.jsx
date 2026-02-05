import React from 'react';

const About = () => {
    const skills = [
        { name: 'Cybersecurity', level: '50%' },
        { name: 'Linux', level: '70%' },
        { name: 'HTML5 & CSS3', level: '85%' },
        { name: 'JavaScript (ES6+)', level: '75%' }
    ];

    const skillItems = [
        {
            name: 'Linux',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        },
        {
            name: 'Cybersecurity',
            image: "https://cdn-icons-png.freepik.com/512/8460/8460433.png"
        },
        {
            name: 'HTML5',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
            name: 'CSS3',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
            name: 'JavaScript',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            name: 'React',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            name: 'Tailwind',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        },
        {
            name: 'Git',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        {
            name: 'Java',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        {
            name: 'Figma',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        },
        {
            name: 'Node.js',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
            name: 'MongoDB',
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        }
    ];

    // Double the items for seamless scrolling
    const sliderItems = [...skillItems, ...skillItems];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-24 smooth-render">
            <div className="max-w-7xl mx-auto w-full py-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 relative inline-block">
                            About Me
                            <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-accent-primary rounded-full"></span>
                        </h2>
                        {/* <p className="text-lg text-text-secondary max-w-xl">
                            A passionate developer-in-training, dedicated to building clean and efficient code.
                        </p> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8 text-text-secondary leading-relaxed overflow-hidden">
                        <p className="text-lg md:text-xl font-medium text-text-primary">
                            Hi there! I’m a dedicated BIT student with a strong interest in cybersecurity and ethical hacking, particularly in securing web applications and understanding how modern systems are built, tested, and protected. I enjoy exploring how vulnerabilities work and learning ways to design safer and more reliable digital solutions.
                        </p>

                        <p className="text-lg md:text-xl">
                           Alongside cybersecurity, I actively work as a web developer, creating modern, responsive, and user-friendly websites. My experience with web technologies helps me view applications from both a developer’s and a security perspective, allowing me to build solutions that are not only functional and visually clean but also security-focused.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                                <span className="text-accent-primary font-mono">&lt;</span>
                                Technical Expertise
                                <span className="text-accent-primary font-mono">/&gt;</span>
                            </h3>

                            {/* Infinite Slider */}
                            <div className="relative w-full overflow-hidden pause-on-hover py-4 mask-linear-fade">
                                {/* Gradient Masks for fading edges */}
                                <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none"></div>

                                <div className="flex w-max animate-scroll">
                                    {sliderItems.map((skill, index) => (
                                        <div key={`${skill.name}-${index}`} className="flex flex-col items-center justify-center gap-3 mx-6 min-w-[80px] group cursor-pointer transition-transform duration-300 hover:scale-110">
                                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1e1e1e] rounded-xl p-3 shadow-md border border-[#333] group-hover:border-accent-primary/50 flex items-center justify-center transition-colors">
                                                <img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                                                />
                                            </div>
                                            <span className="text-xs md:text-sm font-mono text-gray-400 group-hover:text-white transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 justify-center">
                        {skills.map((skill, index) => (
                            <div key={skill.name} className="flex flex-col gap-3">
                                <div className="flex justify-between text-base md:text-lg font-semibold text-text-primary">
                                    <span>{skill.name}</span>
                                    <span className="text-accent-primary badge">{skill.level}</span>
                                </div>
                                <div className="h-3 bg-bg-secondary rounded-full overflow-hidden border border-border-color/50 smooth-render">
                                    <div
                                        className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full animate-fill-bar relative"
                                        style={{ '--width': skill.level, width: 0, animationDelay: `${0.2 * index}s` }}
                                    >
                                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
