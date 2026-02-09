import React, { useEffect, useState } from 'react';

const Hero = ({ setActiveSection }) => {
    // Typing effect for subtitle
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const texts = ["BIT Student", "Cybersecurity Enthusiast", "Full Stack Developer", "Tech Enthusiast"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 50);

            if (!isDeleting && text === fullText) {
                setIsTyping(false); // Stop cursor
                setTimeout(() => {
                    setIsDeleting(true);
                    setIsTyping(true); // Resume cursor
                }, 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(50);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, texts]);

    return (
        <section id="home" className="min-h-[calc(100vh-60px)] md:min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-16 pb-24 md:pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl items-center">
                {/* Left Content - Forced Left Align */}
                <div className="flex flex-col gap-6 text-left items-start z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-sm text-accent-primary animate-pulse-custom badge smooth-render">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-success">
                            <circle cx="12" cy="12" r="6" />
                        </svg>
                        Open to New Opportunities
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Hi, I'm <br />
                        <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                            Pratyush Khadka
                        </span>
                    </h1>

                    <div className="text-xl md:text-2xl text-text-secondary h-[40px] flex items-center">
                        <span className={`pr-1 font-bold text-text-primary ${isTyping ? 'border-r-2 border-accent-primary' : ''} whitespace-nowrap`}>{text}</span>
                    </div>

                    <p className="text-lg text-text-secondary leading-relaxed max-w-xl text-left">
                        Passionate about cybersecurity and ethical hacking while building secure, user-focused web applications. I combine security thinking with web development skills to protect and improve modern digital solutions.
                    </p>

                    <div className="flex flex-wrap gap-6 justify-start">
                        <div className="flex items-center gap-2 text-text-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>Cybersecurity & Ethical Hacking</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                            <span>Full Stack Development</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span>Modern UI/UX Design</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            </svg>
                            <span>Creative Problem Solver</span>
                        </div>

                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                        <button
                            onClick={() => setActiveSection('projects')}
                            className="bg-accent-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-secondary hover:-translate-y-1 transition-all duration-200 shadow-lg shadow-accent-primary/20 flex items-center justify-center gap-2"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="7" height="7" />
                                <rect x="14" y="3" width="7" height="7" />
                                <rect x="14" y="14" width="7" height="7" />
                                <rect x="3" y="14" width="7" height="7" />
                            </svg>
                            Explore My Work
                        </button>
                        <button
                            onClick={() => setActiveSection('contact')}
                            className="bg-transparent text-text-primary border-2 border-border-color px-8 py-3 rounded-md font-semibold hover:border-accent-primary hover:text-accent-primary transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Let's Connect
                        </button>
                        <button
                            onClick={() => window.open('https://www.linkedin.com/in/pratyush-khadka-a9435233b/', '_blank')}
                            className="bg-transparent text-text-primary border border-border-color px-8 py-3 rounded-md font-medium hover:bg-bg-secondary hover:border-accent-primary transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            LinkedIn Profile
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 mt-6 w-full justify-start">
                        <div className="flex items-center gap-3 bg-bg-secondary border border-border-color p-4 rounded-xl">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            <div className="flex flex-col text-left">
                                <strong className="text-xl text-text-primary">3+</strong>
                                <span className="text-sm text-text-secondary">Completed Projects</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-bg-secondary border border-border-color p-4 rounded-xl">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <div className="flex flex-col text-left">
                                <strong className="text-xl text-text-primary">2+</strong>
                                <span className="text-sm text-text-secondary">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div
                    className="relative flex justify-center items-center h-[500px] lg:h-[600px] z-10 w-full overflow-visible animate-reveal"
                    style={{ animationDelay: '0.2s' }}
                >
                    <div className="relative z-10 bg-bg-secondary border border-border-color rounded-3xl p-8 text-center shadow-2xl profile-card smooth-render">
                        {/* Float animation moved to wrapper so indicator sticks to it */}
                        <div className="relative w-48 h-48 mx-auto mb-6">
                            <img src="/assets/images/IMG_0799 2.jpg" alt="Pratyush Khadka" className="w-full h-full object-cover rounded-full shadow-lg border-4 border-accent-primary" />
                            <div className="absolute bottom-4 right-4 w-5 h-5 bg-success border-4 border-bg-secondary rounded-full animate-pulse-custom"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-text-primary mb-2">Pratyush Khadka</h3>
                        <p className="text-text-secondary">Cybersecurity | Web Developer</p>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute w-full h-full pointer-events-none">
                        {/* HTML5 */}
                        <div className="absolute top-[10%] left-[5%] lg:left-[10%] w-16 h-16 bg-bg-secondary border border-border-color rounded-xl flex items-center justify-center text-accent-primary shadow-lg animate-float delay-100">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26" />
                            </svg>
                        </div>
                        {/* CSS3 */}
                        <div className="absolute top-[20%] right-[5%] lg:right-[5%] w-16 h-16 bg-bg-secondary border border-border-color rounded-xl flex items-center justify-center text-accent-primary shadow-lg animate-float delay-1000">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#1572B6" />
                            </svg>
                        </div>
                        {/* Git
                        <div className="absolute top-[8%] right-[25%] lg:right-[28%] w-16 h-16 bg-bg-secondary border border-border-color rounded-xl flex items-center justify-center text-accent-primary shadow-lg animate-float delay-700">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M23.546 10.93 13.07.454a1.553 1.553 0 0 0-2.197 0L8.7 2.63l2.69 2.69a1.845 1.845 0 0 1 2.34 2.35l2.59 2.59a1.846 1.846 0 1 1-1.11 1.05l-2.42-2.42v6.36a1.845 1.845 0 1 1-1.52-.05V8.46a1.846 1.846 0 0 1-1-.24L7.62 5.57 0 13.19a1.553 1.553 0 0 0 0 2.197l10.476 10.476a1.553 1.553 0 0 0 2.197 0l10.873-10.873a1.553 1.553 0 0 0 0-2.197z" fill="#F05033" />
                            </svg>
                        </div> */}
                        {/* GitHub
                        <div className="absolute top-[45%] right-[15%] lg:right-[18%] w-16 h-16 bg-bg-secondary border border-border-color rounded-xl flex items-center justify-center text-text-primary shadow-lg animate-float delay-1500">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 0.5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.38.82 1.11.82 2.24v3.32c0 .32.22.69.83.58A12 12 0 0 0 12 0.5z" />
                            </svg>
                        </div> */}
                        {/* Cybersecurity */}
                        <div className="absolute bottom-[15%] right-[8%] lg:right-[8%] w-16 h-16 bg-bg-secondary border border-border-color rounded-xl flex items-center justify-center text-accent-primary shadow-lg animate-float delay-2300">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
                                <path d="M12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                                <path d="M12 11v5" />
                            </svg>
                        </div>
                        {/* JS */}
                        <div className="absolute bottom-[20%] left-[5%] lg:left-[5%] w-16 h-16 bg-bg-secondary border border-border-color rounded-xl flex items-center justify-center text-accent-primary shadow-lg animate-float delay-2000">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#F7DF1E" />
                            </svg>
                        </div>
                    </div>

                    {/* Floating Stats Cards - Removed float animation */}
                    <div className="absolute -bottom-8 md:bottom-0 left-1/2 -translate-x-1/2 gap-4 w-max pointer-events-none hidden md:flex">
                        <div className="bg-bg-secondary border border-border-color rounded-xl p-3 flex items-center gap-3 shadow-lg">
                            <div className="w-10 h-10 bg-accent-primary/10 rounded-md flex items-center justify-center text-accent-primary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-lg text-text-primary">7</div>
                                <div className="text-xs text-text-secondary">Tech Skills</div>
                            </div>
                        </div>
                        <div className="bg-bg-secondary border border-border-color rounded-xl p-3 flex items-center gap-3 shadow-lg">
                            <div className="w-10 h-10 bg-accent-primary/10 rounded-md flex items-center justify-center text-accent-primary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-lg text-text-primary">100%</div>
                                <div className="text-xs text-text-secondary">Dedication</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
