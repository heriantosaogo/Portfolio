import React, { useState, useEffect } from 'react';
import './Home.css';
import NetworkBackground from './NetworkBackground';
import fotoProfile from '../assets/foto.png';

const phrases = [
    "Full Stack Developer",
    "React & Laravel Developer"
];

const Home = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let timer;
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                // Pause at the end of typing
                timer = setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                // Note: The speed resets automatically on next type cycle
            } else {
                timer = setTimeout(handleTyping, typingSpeed);
            }
        };

        // Start typing only if we haven't set a delayed timer inside the handleTyping (when pausing at the end)
        if (!timer) {
            timer = setTimeout(handleTyping, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="home-section hidden relative">
            {/* Tech Network Style Background Animation */}
            <NetworkBackground />

            <div className="home-content">
                <div className="home-text">
                    <h1 className="home-title">Hi, I'm <span className="highlight">Herianto Saogo </span></h1>
                    <div className="home-subtitle-container">
                        <p className="home-subtitle">
                            {text}<span className="cursor"></span>
                        </p>
                    </div>
                    <p className="home-description">
                        <i>"I love coding because every line of code is a step toward turning ideas into reality."</i>
                    </p>
                    <a
                        href="#projects"
                        className="btn-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        View Portfolio
                    </a>
                </div>
                <div className="home-image-container">
                    <img src={fotoProfile} alt="Saogo Profile" className="home-image" />
                </div>
            </div>
        </section>
    );
};

export default Home;
