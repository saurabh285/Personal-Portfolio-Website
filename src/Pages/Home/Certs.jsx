import { useEffect } from 'react';
import data from '../../data/index.json';

export default function Certifications() {
    const certifications = data.certifications || [];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.certifications--section--card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, index * 300);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const section = document.querySelector('.certifications--section');
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
        <section className='certifications--section ' id='certifications'>
            <h2 className='certifications--section--heading'>Certifications</h2>
            <div className='certifications--section--container'>
                {certifications.map((cert) => (
                    <div key={cert.id} className='certifications--section--card'>
                        <div className='certifications--card'>
                            <h3 className='certifications--section--title'>{cert.title}</h3>
                            <div className="tooltip">
                                <span className="tooltiptext">{cert.issuer} | {cert.issued_date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
