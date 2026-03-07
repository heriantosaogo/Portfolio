import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsList = [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://react.dev/' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', url: 'https://www.php.net/' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg', url: 'https://laravel.com/' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', url: 'https://www.mysql.com/' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', url: 'https://www.figma.com/' }
    ];

    return (
        <section id="skills" className="skills-section hidden">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-grid">
                    {skillsList.map((skill, index) => (
                        <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer" className="skill-card">
                            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                            <h3>{skill.name}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
