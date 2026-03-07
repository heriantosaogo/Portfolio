import React from 'react';
import './Footer.css';

const Footer = () => {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            {/* Decorative top wave */}
            <div className="footer-wave">
                <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
                    <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z" fill="var(--background-light)" />
                </svg>
            </div>

            <div className="container footer-content">
                {/* Brand */}
                <div className="footer-section brand">
                    <h2 className="footer-logo">Herianto<span>Saogo</span></h2>
                    <p className="footer-desc">
                        Building modern, responsive, and user-friendly web applications with passion and precision.
                    </p>
                    <div className="social-icons">
                        <a href="https://github.com/heriantosaogo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/heriantosaogo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/saogo_her/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        {[
                            { label: 'Home', id: 'home' },
                            { label: 'About', id: 'about' },
                            { label: 'Skills', id: 'skills' },
                            { label: 'Projects', id: 'projects' },
                            { label: 'Contact', id: 'contact' },
                        ].map(({ label, id }) => (
                            <li key={id}>
                                <a href={`#${id}`} onClick={(e) => scrollToSection(e, id)}>
                                    <span className="link-arrow">›</span> {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section contact">
                    <h3>Contact Info</h3>
                    <div className="contact-item">
                        <span className="contact-icon">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </span>
                        <a href="mailto:saogoherianto18@gmail.com">saogoherianto18@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </span>
                        <span>Indonesia</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </span>
                        <span>Available for Freelance</span>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>© {new Date().getFullYear()} <strong>Herianto Saogo</strong>. All rights reserved.</p>
                    <p className="footer-made">Made with <span className="heart">♥</span> using React</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
