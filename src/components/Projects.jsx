import React from 'react';
import './Projects.css';

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

const Projects = () => {
    return (
        <section id="projects" className="projects-section hidden">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projectsList.map((project, index) => (
                        <div key={index} className="project-card">
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
            </div>
        </section>
    );
};

export default Projects;
