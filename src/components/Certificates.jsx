import React, { useEffect, useState } from 'react';
import './Certificates.css';
import certFilament from '../assets/sertifikat/filament.jpeg';
import certReact from '../assets/sertifikat/react.jpeg';
import certDonation from '../assets/sertifikat/Workshop Full Stack Donation Apps.png';

const certificatesList = [
    {
        title: 'Mini Class Laravel Filament Mastery',
        subtitle: '"Panduan Lengkap: Membangun Aplikasi HR Management dengan Laravel & Filament"',
        issuer: 'Dunia Coding',
        date: '26-29 April 2025',
        duration: '8 Jam Pembelajaran',
        speaker: 'Arsadi',
        image: certFilament,
        link: certFilament
    },
    {
        title: 'Workshop React JS x Tailwind CSS',
        subtitle: '"Bikin Website Bola dalam 2 Hari: Fetch Data, Styling, & Deploy!"',
        issuer: 'Dunia Coding',
        date: '11-12 April 2025',
        duration: '4 Jam Pembelajaran',
        speaker: 'Alfian Luthfi',
        image: certReact,
        link: certReact
    },
    {
        title: 'Workshop Full Stack Donation Apps',
        subtitle: '"Auto Panen Pahala! Bangun Aplikasi Donasi Menggunakan Laravel 12"',
        issuer: 'Dunia Coding',
        date: '22-23 Maret 2025',
        duration: '4 Jam Pembelajaran',
        speaker: 'Yunus Febriansyah',
        image: certDonation,
        link: certDonation
    }
];

const Certificates = () => {
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
        <section id="certificates" className="certificates-section hidden">
            <div className="container">
                <h2 className="section-title">My Certificates</h2>
                <div className="certificates-grid">
                    {certificatesList.map((cert, index) => (
                        <div key={index} className="certificate-card" role="button" tabIndex={0} onClick={() => setActiveCert(cert)} onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') setActiveCert(cert);
                        }}>
                            <div className="certificate-image-container">
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

export default Certificates;
