import { useState } from 'react';
import data from '../../data/index.json';

export default function Portfolio() {
    const portfolios = data.portfolio || [];
    const [selectedProject, setSelectedProject] = useState(null);

    const handleToggle = (id) => {
        setSelectedProject(selectedProject === id ? null : id);
    };

    const thesisProjects = portfolios.filter(project => project.title.startsWith('Thesis'));
    const otherProjects = portfolios.filter(project => !project.title.startsWith('Thesis'));

    return (
        <section className='portfolio-section' id='MyPortfolio'>
            <h2 className='portfolio-heading'>Research and Projects</h2>
            
            <h3 className='portfolio-subheading'>Thesis</h3><br></br>
            <div className='portfolio-container thesis-container'>
                {thesisProjects.map((project) => (
                    <div key={project.id} className={`portfolio-card ${selectedProject === project.id ? 'expanded' : ''}`} onClick={() => handleToggle(project.id)}>
                        <img src={project.src} alt={project.title} className='portfolio-image thesis-image' />
                        <div className='portfolio-content'>
                            <h3 className='portfolio-title'>{project.title}</h3>
                        </div>
                        <div className={`portfolio-details ${selectedProject === project.id ? 'show' : ''}`}>
                            <p>{project.description}</p>
                            {project.link && (
                                <a href={project.link} className='portfolio-link' target='_blank' rel='noopener noreferrer'>
                                    View Project
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <h3 className='portfolio-subheading'>Projects</h3><br></br>
            <div className='portfolio-container projects-container'>
                {otherProjects.map((project) => (
                    <div key={project.id} className={`portfolio-card ${selectedProject === project.id ? 'expanded' : ''}`} onClick={() => handleToggle(project.id)}>
                        <img src={project.src} alt={project.title} className='portfolio-image' />
                        <div className='portfolio-content'>
                            <h3 className='portfolio-title'>{project.title}</h3>
                        </div>
                        <div className={`portfolio-details ${selectedProject === project.id ? 'show' : ''}`}>
                            <p>{project.description}</p>
                            {project.link && (
                                <a href={project.link} className='portfolio-link' target='_blank' rel='noopener noreferrer'>
                                    View Project
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <style jsx>{`
                .portfolio-section {
                    padding: 2rem;
                    text-align: center;
                }
                .portfolio-heading {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 2rem;
                    color: black;
                }
                .portfolio-subheading {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-top: 2rem;
                    color: black;
                }
                .portfolio-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                    max-width: 100%;
                    margin: auto;
                    padding: 0 2rem;
                    align-items: start;
                }
                .thesis-container, .projects-container {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    flex-wrap: wrap;
                }
                .portfolio-card {
                    background: white;
                    padding: 1rem;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    transition: transform 0.2s ease-in-out;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;
                    min-height: 250px;
                    max-width: 250px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    height: auto;
                }
                .portfolio-card:hover {
                    transform: scale(1.03);
                }
                .portfolio-image {
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                    border-radius: 8px;
                }
                .thesis-image {
                    width: 100%;
                    height: 180px;
                    object-fit: cover;
                }
                .portfolio-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    width: 100%;
                }
                .portfolio-title {
                    font-size: 1.2rem;
                    margin-top: 0.5rem;
                    text-align: center;
                }
                .portfolio-details {
                    background: white;
                    padding: 1rem;
                    text-align: justify;
                    width: 100%;
                    display: none;
                    position: relative;
                }
                .portfolio-card.expanded .portfolio-details {
                    display: block;
                }
                .portfolio-link {
                    display: inline-block;
                    margin-top: 0.5rem;
                    color: #003d79;
                    text-decoration: none;
                    font-weight: bold;
                }
                .portfolio-link:hover {
                    text-decoration: underline;
                }
            `}</style>
        </section>
    );
}
