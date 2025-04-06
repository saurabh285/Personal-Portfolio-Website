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
            <h2 className='portfolio-heading'>AI Projects & Applied Research</h2>

            

            <h3 className='portfolio-subheading'>GenAI, AI Agents, ML, Computer Vision</h3>
            <div className="live-projects-container">
            <h3 className="live-projects-heading">Try out My Live Projects</h3>
        </div><br />
            <div className='portfolio-container projects-container'>
                {otherProjects.map((project) => (
                    <div key={project.id} className={`portfolio-card ${selectedProject === project.id ? 'expanded' : ''}`}>
                        <img src={project.src} alt={project.title} className='portfolio-image' />
                        <div className='portfolio-content'>
                            <h3 className='portfolio-title'>{project.title}</h3>
                            <button className="read-more-btn" onClick={() => handleToggle(project.id)}>
                                {selectedProject === project.id ? "Read Less" : "Read More"}
                            </button>
                            {project.live && (
                                <a href={project.live} className="live-badge" target="_blank" rel="noopener noreferrer">
                                    LIVE
                                </a>
                            )}
                        </div>
                        {selectedProject === project.id && (
                            <div className="portfolio-details">
                                <p>{project.description}</p>
                                {project.link && (
                                    <a href={project.link} className='portfolio-link' target='_blank' rel='noopener noreferrer'>
                                        View Project
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <h3 className='portfolio-subheading'>Thesis</h3><br />
            <div className='portfolio-container thesis-container'>
                {thesisProjects.map((project) => (
                    <div key={project.id} className={`portfolio-card ${selectedProject === project.id ? 'expanded' : ''}`}>
                        <img src={project.src} alt={project.title} className='portfolio-image thesis-image' />
                        <div className='portfolio-content'>
                            <h3 className='portfolio-title'>{project.title}</h3>
                            
                            <button className="read-more-btn" onClick={() => handleToggle(project.id)}>
                                {selectedProject === project.id ? "Read Less" : "Read More"}
                            </button>
                        </div>
                        {selectedProject === project.id && (
                            <div className="portfolio-details">
                                <p>{project.description}</p>
                                {project.link && (
                                    <a href={project.link} className='portfolio-link' target='_blank' rel='noopener noreferrer'>
                                        View Project
                                    </a>
                                )}
                            </div>
                        )}
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
                    transition: transform 0.2s ease-in-out; /* Keeps the hover effect */
                }
                .portfolio-card:hover {
                    transform: scale(1.03); /* Hover effect remains */
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
                }
                .portfolio-details {
                    background: white;
                    padding: 1rem;
                    text-align: justify;
                    width: 100%;
                    display: block;
                    position: relative;
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
                .read-more-btn {
                    background: none;
                    border: none;
                    color: #003d79;
                    font-size: 14px;
                    font-weight: bold;
                    cursor: pointer;
                    margin-top: 5px;
                    transition: color 0.3s ease-in-out;
                }
                .read-more-btn:hover {
                    color: #0056b3;
                }
                .live-badge {
                    display: inline-block;
                    background-color: red;
                    color: white;
                    font-size: 12px;
                    font-weight: bold;
                    padding: 4px 10px;
                    margin-top: 5px;
                    border-radius: 5px;
                    text-decoration: none;
                    transition: background 0.3s ease-in-out;
                }
                .live-badge:hover {
                    background-color: darkred;
                }
                 .live-projects-container {
        text-align: center;
        margin-top: 1.5rem;
    }
    .live-projects-heading {
        font-size: 1.0rem;
        font-weight: bold;
        color: #003d79;
        text-transform: uppercase;
        letter-spacing: 1px;
        background: linear-gradient(90deg, #003d79, #003d79);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        // animation: fadeIn 1s ease-in-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
            `}</style>
        </section>
    );
}
