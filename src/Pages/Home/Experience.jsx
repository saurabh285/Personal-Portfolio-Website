import { useState } from 'react';
import data from '../../data/index.json';

export default function ExperienceTimeline() {
    const jobs = data.jobs[0] || [];
    const [expandedJobId, setExpandedJobId] = useState(null);

    const handleToggle = (id) => {
        setExpandedJobId(expandedJobId === id ? null : id);
    };

    return (
        <section className='experience-timeline' id='experience'>
            <h2 className='experience-timeline-heading'>Work Experience</h2>
            <div className='timeline-wrapper'>
                {jobs.map((job, index) => (
                    <div key={job.id} className='timeline-card' onClick={() => handleToggle(job.id)}>
                        <div className='timeline-date'>{job.time}</div>
                        <div className='timeline-info'>
                        <div className='timeline-info'>
    <h3 className='timeline-title'>{job.title}</h3>
    <div className='timeline-header'>
        <h4 className='timeline-company'>{job.company}</h4>
        <button className='read-more' onClick={() => handleToggle(job.id)}>
            {expandedJobId === job.id ? "Read less" : "Read more"}
        </button>
    </div>
</div>

</div>

                        {expandedJobId === job.id && (
                            <div className='timeline-details'>
                                <h4 className='timeline-place'>{job.place}</h4>
                                <div className='timeline-tasks'>
                                    <b>Responsibilities:</b>
                                    <ul>
                                        {job.task.map((task, index) => (
                                            <li key={index}>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .experience-timeline {
                    padding: 2rem;
                    text-align: center;
                }
                    .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.read-more {
    background: none;
    border: none;
    color: #003d79;
    font-size: 0.9rem;
    cursor: pointer;
}

.read-more:hover {
   text-decoration: underline; 
    opacity: 0.8;
}


                .experience-timeline-heading {
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 2rem;
                    color: black;
                }

                .timeline-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    max-width: 700px;
                    margin: auto;
                }

                .timeline-card {
                    position: relative;
                    background: white;
                    padding: 1.5rem;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    transition: transform 0.2s ease-in-out;
                }

                .timeline-card:hover {
                    transform: scale(1.02);
                }

                .timeline-date {
                    background: #003d79;
                    color: white;
                    font-weight: bold;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    display: inline-block;
                    margin-bottom: 1rem;
                }

                .timeline-info {
                    text-align: left;
                }

                .timeline-title {
                    font-size: 1.2rem;
                    margin-bottom: 0.3rem;
                }

                .timeline-company {
                    font-style: italic;
                    color: #666;
                }

                .timeline-details {
                    margin-top: 1rem;
                    padding: 1rem;
                    border-top: 1px solid #ddd;
                    text-align: left;
                }

                .timeline-tasks ul {
                    list-style: disc;
                    padding-left: 1.5rem;
                }

                .timeline-tasks li {
                    margin-bottom: 0.5rem;
                }

                @media (max-width: 600px) {
                    .timeline-wrapper {
                        padding: 0 1rem;
                    }
                }
            `}</style>
        </section>
    );
}
// import { useEffect } from 'react';
// import data from '../../data/index.json';

// export default function Experience() {
//     const jobs = data.jobs[0] || [];

//     useEffect(() => {
//         const observerOptions = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.1
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     const cards = entry.target.querySelectorAll('.experience--section--card');
//                     cards.forEach((card, index) => {
//                         setTimeout(() => {
//                             card.classList.add('animate');
//                         }, index * 600);
//                     });
//                     observer.unobserve(entry.target);
//                 }
//             });
//         }, observerOptions);

//         const section = document.querySelector('.experience--section');
//         if (section) {
//             observer.observe(section);
//         }

//         return () => {
//             if (section) {
//                 observer.unobserve(section);
//             }
//         };
//     }, []);

//     const isLastJobCentered = jobs.length % 2 === 1; // Check if the last job needs centering

//     return (
//         <section className='experience--section' id='experience'>
//             <h2 className='experience--section--heading'>Work Experience</h2>
//             <div className={`experience--section--container ${isLastJobCentered ? 'centered' : ''}`}>
//                 {jobs.map((job) => (
//                     <div key={job.id} className='experience--section--card'>
//                         <div className='experience--card'>
//                             <h3 className='experience--section--title'>{job.title}</h3>
//                             <h4 className='experience--section--company' style={{ fontStyle: 'italic' }}>{job.company}</h4>
//                             <h4 className='experience--section--time' style={{ fontStyle: 'italic' }}>{job.time}</h4>
//                             <h4 className='experience--section--place' style={{ fontStyle: 'italic' }}>{job.place}</h4>
//                             <br/>
//                             <div className='experience--section--tasks'>
//                                 <b>Responsibilities:</b>
//                                 <ul>
//                                     {job.task.map((task, index) => (
//                                         <li key={index}>{task}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
