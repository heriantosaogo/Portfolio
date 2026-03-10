import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section hidden">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p>
                        I am an Information Systems student with a strong passion for web development.
                        I'm enjoy building modern and responsive web applications using technologies such as HTML, CSS, JavaScript, React, PHP, and Laravel.

                        I'm focus on creating efficient, user-friendly, and scalable web solutions while continuously improving my problem-solving skills.
                        I am always eager to learn new technologies and explore better ways to build impactful digital products.
                    </p>

                    <div className="social-links-container">
                        <h3 className="social-title">Connect with me:</h3>
                        <div className="social-links">
                            <a href="https://github.com/heriantosaogo" className="social-icon github" target="_blank" rel="noopener noreferrer">
                                <i className="devicon-github-original"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/herianto-saogo/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                                <i className="devicon-linkedin-plain"></i>
                            </a>
                            <a href="https://www.instagram.com/saogo_her/" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="https://www.tiktok.com/@heriantosaogo" className="social-icon tiktok" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v8a8 8 0 1 1-8-8v3a5 5 0 0 0 5 5z"></path></svg>
                            </a>
                            <a href="https://wa.me/6281268604651" className="social-icon whatsapp" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Me Button */}
                    <div className="about-cta">
                        <a
                            href="#contact"
                            className="btn-contact-me"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span className="btn-contact-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </span>
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
