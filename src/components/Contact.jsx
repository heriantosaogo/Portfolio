import React, { useState } from 'react';
import './Contact.css';
import IDCard from './IDCard';


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // This object holds the form data along with the Access Key for Web3Forms
        const payload = {
            access_key: "2c30e1d5-8443-4ec0-9c56-c9d55ed68f46",
            // access_key: "YOUR_ACCESS_KEY_HERE", // User needs to replace this
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.success) {
                alert('Pesan Anda berhasil dikirim! Terima kasih.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
            }
        } catch (error) {
            console.error(error);
            alert('Gagal mengirim pesan, tolong periksa koneksi Anda.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section hidden">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-container">
                    <div className="contact-left">
                        <IDCard className="id-card--contact" variant="contact" />
                        <div className="contact-info">
                            <h3>Get in Touch</h3>
                            <p>Email: <a href="mailto:saogoherianto18@gmail.com" className="email-link">saogoherianto18@gmail.com</a></p>
                        </div>
                    </div>


                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Mengirim...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
