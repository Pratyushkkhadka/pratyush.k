import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [loading, setLoading] = useState(false);
    const timeoutRef = useRef(null);

    const openMail = () => {
        const email = "5465khadka@gmail.com";
        const subject = "Portfolio Inquiry";
        const body = "Hello Pratyush, I'm reaching out after seeing your portfolio...";
        const fallbackDelay = 15;

        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);
        const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;

        // Clear any existing timeout if user clicks again fast
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // Create hidden iframe to trigger mailto without navigating away immediately
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = mailtoLink;
        document.body.appendChild(iframe);

        // After delay, remove iframe and fallback to Gmail web
        timeoutRef.current = setTimeout(() => {
            if (document.body.contains(iframe)) {
                document.body.removeChild(iframe);
            }
            window.open(gmailUrl, '_blank');
        }, fallbackDelay);
    };

    const validateField = (name, value) => {
        let error = '';
        if (!value.trim()) {
            error = 'This field is required';
        } else if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                error = 'Please enter a valid email';
            }
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            const error = validateField(name, value);
            if (!error) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        let isValid = true;

        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) {
                newErrors[key] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);

        if (isValid) {
            setLoading(true);
            setStatus(null);

            try {
                // IMPORTANT: Replace these with your actual IDs from EmailJS dashboard
                const SERVICE_ID = 'service_5lqcfxe';
                const TEMPLATE_ID = 'template_jxj3m85';
                const PUBLIC_KEY = 'lasClcdPK7EWdCGSx';

                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Pratyush', // You can customize this
                };

                await emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    templateParams,
                    PUBLIC_KEY
                );

                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(null), 5000);
            } catch (error) {
                console.error('EmailJS Error Object:', error);
                console.error('EmailJS Error Text:', error?.text || 'No error text');
                setStatus('error');
            } finally {
                setLoading(false);
            }
        } else {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="min-h-screen p-6 md:p-12 lg:p-24 smooth-render">
            <h2 className="text-3xl font-semibold mb-2 text-accent-primary">Let's Build Something Amazing</h2>
            <p className="text-lg text-text-secondary mb-12">Have a project in mind? I'd love to hear from you!</p>

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 order-2 lg:order-1">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold text-text-primary">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`p-3 border-2 rounded-md bg-bg-secondary text-text-primary text-base transition-all duration-200 focus:outline-none focus:border-accent-primary ${errors.name ? 'border-error' : 'border-border-color'}`}
                        />
                        {errors.name && <span className="text-error text-sm">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-text-primary">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`p-3 border-2 rounded-md bg-bg-secondary text-text-primary text-base transition-all duration-200 focus:outline-none focus:border-accent-primary ${errors.email ? 'border-error' : 'border-border-color'}`}
                        />
                        {errors.email && <span className="text-error text-sm">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-semibold text-text-primary">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tell me about your project or just say hello..."
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`p-3 border-2 rounded-md bg-bg-secondary text-text-primary text-base transition-all duration-200 focus:outline-none focus:border-accent-primary resize-y ${errors.message ? 'border-error' : 'border-border-color'}`}
                        ></textarea>
                        {errors.message && <span className="text-error text-sm">{errors.message}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-accent-primary text-white py-3 px-6 rounded-md font-semibold transition-all duration-200 shadow-lg shadow-accent-primary/20 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent-secondary hover:-translate-y-1'}`}
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : 'Send Message'}
                    </button>

                    {status === 'success' && (
                        <div className="p-4 rounded-md text-center text-sm bg-success/10 text-success border border-success">
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="p-4 rounded-md text-center text-sm bg-error/10 text-error border border-error">
                            {Object.keys(errors).length > 0 ? 'Please fix the errors above' : 'Something went wrong. Please try again later or email me directly.'}
                        </div>
                    )}
                </form>

                <div className="flex flex-col gap-6 order-1 lg:order-2">
                    <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-xl font-semibold">Get In Touch</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and development.
                        </p>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-bg-secondary rounded-xl border border-border-color smooth-render">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary shrink-0 mt-1">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <div className="flex flex-col gap-1">
                            <strong className="text-sm text-text-secondary">Email</strong>
                            <button
                                onClick={openMail}
                                className="text-left text-text-primary hover:text-accent-primary transition-colors cursor-pointer"
                            >
                                5465khadka@gmail.com
                            </button>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-bg-secondary rounded-xl border border-border-color smooth-render">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-primary shrink-0 mt-1">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                        <div className="flex flex-col gap-1">
                            <strong className="text-sm text-text-secondary">LinkedIn</strong>
                            <a href="https://www.linkedin.com/in/pratyush-khadka-a9435233b/" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent-primary transition-colors">Connect with me professionally</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-bg-secondary rounded-xl border border-border-color smooth-render">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-accent-primary shrink-0 mt-1">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <div className="flex flex-col gap-1">
                            <strong className="text-sm text-text-secondary">WhatsApp</strong>
                            <a href="https://wa.me/9779818438539" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent-primary transition-colors">+977-9818438539</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
