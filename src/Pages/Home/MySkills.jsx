import { useEffect } from 'react';
import data from '../../data/index.json';

export default function Skills() {
    const skillsData = data.skills || [];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.skills--section--card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, index * 600);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const section = document.querySelector('.skills--section');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section className='skills-section' id='mySkills'>
            <h2 className='skills-section-heading'>Expertise</h2>
            <div className='skills-container'>
                {skillsData.map((skill) => (
                    <div key={skill.id} className='skills-card'>
                        <img src={skill.src} alt={skill.title} className='skills-card-image' />
                        <h3 className='skills-card-title'>{skill.title}</h3>
                        <div className='skills-details'>
                            {/* <p>{skill.description}</p> */}
                            {/* <b>Skills:</b> */}
                            <ul>
                                {skill.skills.split(',').map((skillItem, index) => (
                                    <li key={index}>{skillItem.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .skills-section {
                    padding: 3rem;
                    text-align: center;
                    // max-width: 1200px;
                    margin: auto;
                }

                .skills-section-heading {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 2rem;
                    color: black;
                }

                .skills-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1rem;
                    max-width: 100%;
                    margin: auto;
                    padding: 0 1rem;
                }

                .skills-card {
                    background: white;
                    padding: 1rem;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    transition: transform 0.2s ease-in-out;
                }

                .skills-card:hover {
                    transform: scale(1.03);
                }

                .skills-card-image {
                    width: 80px;
                    height: 80px;
                    object-fit: contain;
                    margin-bottom: 0.5rem;
                }

                .skills-card-title {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }

                .skills-details {
                    text-align: left;
                    padding: 1rem;
                }

                .skills-details ul {
                    list-style: disc;
                    padding-left: 1.5rem;
                }

                .skills-details li {
                    margin-bottom: 0.3rem;
                }

                @media (max-width: 768px) {
                    .skills-container {
                        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                        padding: 0;
                    }
                }
            `}</style>
        </section>
    );
}
// import { useEffect } from 'react';
// import data from '../../data/index.json';

// export default function Skills() {
//     const skillsData = data.skills || [];

//     useEffect(() => {
//         const observerOptions = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.1
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     const cards = entry.target.querySelectorAll('.skills--section--card');
//                     cards.forEach((card, index) => {
//                         setTimeout(() => {
//                             card.classList.add('animate');
//                         }, index * 600);
//                     });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, observerOptions);

//         const section = document.querySelector('.skills--section');
//         if (section) {
//             observer.observe(section);
//         }

//         return () => {
//             if (section) {
//                 observer.unobserve(section);
//             }
//         };
//     }, []);

//     return (
//         <section className='experience--section skills--section' id='mySkills'>
//             <h2 className='experience--section--heading skills--section--heading'>Expertise</h2>
//             <div className='experience--section--container skills--section--container'>
//                 {skillsData.map((skill) => (
//                     <div key={skill.id} className='experience--section--card skills--section--card'>
//                         <div className='skills--card-content'>
//                             <img src={skill.src} alt={skill.title} className='skills--card--image' />
//                             <h3 className='experience--section--title skills--section--title'>{skill.title}</h3>
//                         </div>
//                         <div className='experience--card skills--card'>
//                             <div className='experience--section--details skills--section--details b'>
//                                 <p>
//                                     {skill.description}
//                                     <br />
//                                     <br />
//                                     <b>Skills:</b>
//                                     <ul>
//                                         {skill.skills.split(',').map((skillItem, index) => (
//                                             <li key={index}>{skillItem.trim()}</li>
//                                         ))}
//                                     </ul>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
