import { useState } from 'react';
import data from '../../data/index.json';

export default function Portfolio() {
    const portfolios = data.portfolio || [];
    const [selectedProject, setSelectedProject] = useState(null);

    const handleToggle = (index) => {
        setSelectedProject(selectedProject === index ? null : index);
    };

    return (
        <section className='portfolio-section' id='MyPortfolio'>
            <h2 className='portfolio-heading'>Research and Projects</h2>
            <div className='portfolio-container'>
                {portfolios.map((project, index) => (
                    <div key={index} className={`portfolio-card ${selectedProject === index ? 'expanded' : ''}`} onClick={() => handleToggle(index)}>
                        <img src={project.src} alt={project.title} className='portfolio-image' />
                        <div className='portfolio-content'>
                            <h3 className='portfolio-title'>{project.title}</h3>
                        </div>
                        <div className={`portfolio-details ${selectedProject === index ? 'show' : ''}`}>
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
                .portfolio-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 1rem;
                    max-width: 100%;
                    margin: auto;
                    padding: 0 2rem;
                    align-items: start;
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
                    min-height: 320px;
                    position: relative;
                    overflow: hidden;
                    height: auto;
                }
                .portfolio-card:hover {
                    transform: scale(1.03);
                }
                .portfolio-image {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                    border-radius: 8px;
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
                    // border-top: 1px solid #ddd;
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
                @media (max-width: 1200px) {
                    .portfolio-container {
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    }
                }
                @media (max-width: 900px) {
                    .portfolio-container {
                        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    }
                }
                @media (max-width: 600px) {
                    .portfolio-container {
                        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
                        padding: 0 1rem;
                    }
                }
            `}</style>
        </section>
    );
}

// import { useEffect } from 'react';
// import { Link } from 'react-scroll';
// import data from '../../data/index.json';
// import GitHubIcon from '../../data/github.png'; // Update with the correct path to your GitHub icon
// import GitHubIcon2 from '../../data/github-mark.png';

// export default function MyPortfolio() {
//     const portfolios = data.portfolio || [];

//     useEffect(() => {
//         const observerOptions = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.1
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     const cards = entry.target.querySelectorAll('.portfolio--section--card');
//                     cards.forEach((card, index) => {
//                         setTimeout(() => {
//                             card.classList.add('animate');
//                         }, index * 600);
//                     });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, observerOptions);

//         const section = document.querySelector('.portfolio--section');
//         if (section) {
//             observer.observe(section);
//         }

//         return () => {
//             if (section) {
//                 observer.unobserve(section);
//             }
//         };
//     }, []);

//     const isLastPortfolioCentered = portfolios.length % 2 === 1; // Check if the last portfolio needs centering

//     return (
//         <section className='portfolio--section' id='MyPortfolio'>
//             <div className='portfolio--container--box'>
//                 <div className='portfolio--container'>
//                     <p className='sub--title'></p>
//                     <h2 className='portfolio--section--heading'>
//                         Portfolio
//                     </h2>
//                 </div>
//                 <div>
//                     <a style={{ textDecoration: 'none' }} href='https://github.com/saurabh285?tab=repositories'>
//                         <button className='btn btn-github'>
//                             <img src={GitHubIcon} alt="GitHub" className='github-icon' />
//                             Visit My GitHub
//                         </button>
//                     </a>
//                 </div>
//             </div>
//             <div className={`portfolio--section--container ${isLastPortfolioCentered ? 'centered' : ''}`}>
//                 {portfolios.map((item, index) => (
//                     <div key={index} className='portfolio--section--card'>
//                         <div className='portfolio--section--img'>
//                             <img src={item.src} alt={item.title} />
//                         </div>
//                         <div className='portfolio--section--card--content'>
//                             <div>
//                                 <h3 className='portfolio--section--title'>{item.title}</h3>
//                                 <p className='text-md'>
//                                     {item.description}
//                                 </p>
//                             </div>
//                             <p className="text-sm portfolio--link">
//                                 {item.link ? (
//                                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <a href={item.link} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
//                                         <img src={GitHubIcon2} alt="GitHub" className='github-icon' />
//                                         <span className='viewgithub' style={{ marginLeft: '8px', verticalAlign: 'middle', color: '#000' }}>
//                                             View in GitHub
//                                         </span>
//                                     </a>
//                                 </div>
                                
                                
//                                 ) : (
//                                     <Link
//                                         // onClick={closeMenu}
//                                         // activeClass="navbar--active-content"
//                                         spy={true}
//                                         smooth={true}
//                                         offset={-70}
//                                         duration={500}
//                                         to="contactme"
//                                         className="btn btn-outline-primary"
//                                     >
//                                         Get in touch to know more
//                                     </Link>
//                                 )}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
