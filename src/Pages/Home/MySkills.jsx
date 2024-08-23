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
        <section className='experience--section skills--section' id='mySkills'>
            <h2 className='experience--section--heading skills--section--heading'>Expertise</h2>
            <div className='experience--section--container skills--section--container'>
                {skillsData.map((skill) => (
                    <div key={skill.id} className='experience--section--card skills--section--card'>
                        <div className='skills--card-content'>
                            <img src={skill.src} alt={skill.title} className='skills--card--image' />
                            <h3 className='experience--section--title skills--section--title'>{skill.title}</h3>
                        </div>
                        <div className='experience--card skills--card'>
                            <div className='experience--section--details skills--section--details b'>
                                <p>
                                    {skill.description}
                                    <br />
                                    <br />
                                    <b>Skills:</b>
                                    <ul>
                                        {skill.skills.split(',').map((skillItem, index) => (
                                            <li key={index}>{skillItem.trim()}</li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
