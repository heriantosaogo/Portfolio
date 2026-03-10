import React, { useRef } from 'react';
import { motion as Motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import './IDCard.css';
import fotoProfile from '../assets/gambar.png';

const IDCard = ({ className = '', variant = 'default' }) => {
    const cardRef = useRef(null);
    const isContact = variant === 'contact';

    // Motion values for mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Transform mouse position to rotation
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
    const lanyardRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const lanyardRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            className={`id-card-wrapper hidden ${className}`}

            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px" }}
        >
            {/* Tali ID Card - Bergerak mengikuti Kartu */}
            {!isContact ? (
                <Motion.div
                    className="id-card-lanyard"
                    style={{
                        rotateX: lanyardRotateX,
                        rotateY: lanyardRotateY,
                        transformOrigin: "top center",
                        zIndex: 20
                    }}
                >
                    <div className="lanyard-strap">
                        <span className="strap-text">WEB DEVELOPER</span>
                    </div>
                    <div className="lanyard-hardware">
                        <div className="clasp"></div>
                        <div className="hook"></div>
                    </div>
                </Motion.div>
            ) : null}

            <Motion.div
                ref={cardRef}
                drag={isContact ? false : true}
                dragConstraints={isContact ? undefined : { left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={isContact ? undefined : 0.1}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}

                whileHover={{ scale: isContact ? 1.02 : 1.05 }}
                whileDrag={isContact ? undefined : { scale: 0.95, cursor: "grabbing" }}
                className="id-card-container"
            >
                {isContact ? <div className="id-card-clip" aria-hidden="true" /> : null}

                {/* ID Card Front */}
                <div className="id-card-content moon-theme">
                    <div className="moon-header">
                        <div className="moon-slot"></div>
                        <h1 className="moon-logo">SAOGO</h1>
                    </div>

                    <div className="moon-body">
                        <div className="profile-photo-container">
                            <img src={fotoProfile} alt="Herianto Saogo" className="profile-photo" />
                            <div className="photo-overlay"></div>
                        </div>
                    </div>

                    <div className="moon-footer">
                        <div className="idcard-footer-content">
                            <span className="idcard-footer-name">HERIANTO SAOGO</span>
                            <span className="idcard-footer-info">WEB DEVELOPER</span>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="id-card-glow"></div>
                </div>
            </Motion.div>


        </div >
    );
};

export default IDCard;
