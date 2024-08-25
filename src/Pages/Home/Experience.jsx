import { useEffect } from 'react';
import data from '../../data/index.json';

export default function Experience() {
    const jobs = data.jobs[0] || [];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.experience--section--card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, index * 600);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const section = document.querySelector('.experience--section');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const isLastJobCentered = jobs.length % 2 === 1; // Check if the last job needs centering

    return (
        <section className='experience--section' id='experience'>
            <h2 className='experience--section--heading'>Work Experience</h2>
            <div className={`experience--section--container ${isLastJobCentered ? 'centered' : ''}`}>
                {jobs.map((job) => (
                    <div key={job.id} className='experience--section--card'>
                        <div className='experience--card'>
                            <h3 className='experience--section--title'>{job.title}</h3>
                            <h4 className='experience--section--company' style={{ fontStyle: 'italic' }}>{job.company}</h4>
                            <h4 className='experience--section--time' style={{ fontStyle: 'italic' }}>{job.time}</h4>
                            <h4 className='experience--section--place' style={{ fontStyle: 'italic' }}>{job.place}</h4>
                            <br/>
                            <div className='experience--section--tasks'>
                                <b>Responsibilities:</b>
                                <ul>
                                    {job.task.map((task, index) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
