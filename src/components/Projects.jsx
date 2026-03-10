import React, { useEffect, useState } from 'react';
import './Projects.css';
import certFilament from '../assets/sertifikat/filament.jpeg';
import certReact from '../assets/sertifikat/react.jpeg';
import certDonation from '../assets/sertifikat/Workshop Full Stack Donation Apps.png';

const projectsList = [
    {
        title: 'Website Bola',
        description: 'A modern football information website built meticulously using React.js and TailwindCSS.',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=600&auto=format&fit=crop' // Placeholder football image
    },
    {
        title: 'Laravel Shop Website',
        description: 'An e-commerce website with product categories and subcategories built using Laravel.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop' // Placeholder shop image
    },
    // {
    //     title: 'Online Handwriting System',
    //     description: 'A web application that allows students to write assignments digitally with a paper-like interface.',
    //     image: 'https://images.unsplash.com/photo-1455390582262-044cdead27bd?q=80&w=600&auto=format&fit=crop' // Placeholder handwriting image
    // },
    {
        title: 'Admin Dashboard with Filament',
        description: 'An admin dashboard built with Laravel Filament to manage application data.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' // Placeholder dashboard image
    },
    {
        title: 'Weather App',
        description: 'A modern weather application for checking real-time forecasts and conditions.',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=600&auto=format&fit=crop' // Placeholder weather image
    }
];

const certificatesList = [
    {
        title: 'Mini Class Laravel Filament Mastery',
        subtitle: '"Panduan Lengkap: Membangun Aplikasi HR Management dengan Laravel & Filament"',
        issuer: 'Dunia Coding',
        date: '26-29 April 2025',
        duration: '8 Jam Pembelajaran',
        speaker: 'Arsadi',
        image: certFilament,
        link: certFilament,
    },
    {
        title: 'Workshop React JS x Tailwind CSS',
        subtitle: '"Bikin Website Bola dalam 2 Hari: Fetch Data, Styling, & Deploy!"',
        issuer: 'Dunia Coding',
        date: '11-12 April 2025',
        duration: '4 Jam Pembelajaran',
        speaker: 'Alfian Luthfi',
        image: certReact,
        link: certReact,
    },
    {
        title: 'Workshop Full Stack Donation Apps',
        subtitle: '"Auto Panen Pahala! Bangun Aplikasi Donasi Menggunakan Laravel 12"',
        issuer: 'Dunia Coding',
        date: '22-23 Maret 2025',
        duration: '4 Jam Pembelajaran',
        speaker: 'Yunus Febriansyah',
        image: certDonation,
        link: certDonation,
    },
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('projects');
    const [activeCert, setActiveCert] = useState(null);

    useEffect(() => {
        if (!activeCert) return;

        const onKeyDown = (event) => {
            if (event.key === 'Escape') setActiveCert(null);
        };

        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [activeCert]);

    return (
        <section id="projects" className="projects-section hidden">
            <div className="container">
                <h2 className="section-title">Portfolio</h2>

                <div className="portfolio-tabs" role="tablist" aria-label="Portfolio tabs">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'projects'}
                        className={activeTab === 'projects' ? 'portfolio-tab active' : 'portfolio-tab'}
                        onClick={() => setActiveTab('projects')}
                    >
                        Projects
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === 'certificates'}
                        className={activeTab === 'certificates' ? 'portfolio-tab active' : 'portfolio-tab'}
                        onClick={() => setActiveTab('certificates')}
                    >
                        Certificates
                    </button>
                </div>

                {activeTab === 'projects' ? (
                    <div className="projects-grid" role="tabpanel" aria-label="Projects">
                        {projectsList.map((project) => (
                            <div key={project.title} className="project-card">
                                <div className="project-image-container">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="certificates-grid certificates-grid--embedded" role="tabpanel" aria-label="Certificates">
                        {certificatesList.map((cert) => (
                            <div key={cert.title} className="certificate-card" role="button" tabIndex={0} onClick={() => setActiveCert(cert)} onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') setActiveCert(cert);
                            }}>
                                <div className="certificate-image-container" aria-label={`Open certificate: ${cert.title}`}>
                                    <img src={cert.image} alt={cert.title} className="certificate-image" loading="lazy" />
                                    <div className="certificate-overlay">
                                        <button type="button" className="btn-view" onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveCert(cert);
                                        }}>
                                            View Certificate
                                        </button>
                                    </div>
                                </div>
                                <div className="certificate-content">
                                    <h3 className="certificate-title">{cert.title}</h3>
                                    <p className="certificate-subtitle">{cert.subtitle}</p>
                                    <p className="certificate-issuer">{cert.issuer}</p>
                                    <p className="certificate-meta">{cert.date} · {cert.duration}</p>
                                    <p className="certificate-meta">Pemateri: {cert.speaker}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {activeCert ? (
                <div className="cert-modal" role="dialog" aria-modal="true" aria-label={`Certificate viewer: ${activeCert.title}`}>
                    <button type="button" className="cert-modal-backdrop" aria-label="Close" onClick={() => setActiveCert(null)} />
                    <div className="cert-modal-panel" role="document">
                        <button type="button" className="cert-modal-close cert-modal-close--floating" aria-label="Close" onClick={() => setActiveCert(null)}>
                            X
                        </button>
                        <img src={activeCert.image} alt={activeCert.title} className="cert-modal-image cert-modal-image--only" />
                    </div>
                </div>
            ) : null}
        </section>
    );
};

export default Projects;
