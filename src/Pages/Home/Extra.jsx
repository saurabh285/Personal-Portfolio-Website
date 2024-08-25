import { useEffect } from 'react';
import medals from '../../data/medals.png';
import football from '../../data/football.png';
import run1 from '../../data/run1.png';
import run2 from '../../data/run2.png';

export default function AboutMe() {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.aboutme--section--card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, index * 600);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const section = document.querySelector('.aboutme--section');
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
        <section className='aboutme--section' id='aboutme'>
            <h2 className='aboutme--section--heading'>About Me & Sports</h2>
            <div className='aboutme--section--container'>
                <div className='aboutme--section--card'>
                    <div className='aboutme--card'>
                        <p className='aboutme--section--description'>
                            I'm a football enthusiast and former school team captain, excelling in zonals and inter-state tournaments. In college, I delved into fitness through running and swimming, completing a biathlon and multiple 10k runs. Currently prepping for a half marathon.

                            A self-taught musician, I'm skilled in harmonica and navigating the guitar. Beyond that, I served as the sports convener during my undergrad, organizing various sporting events. Also, I'm a big foodie, always eager to savor new cuisines.
                        </p>
                    </div>
                    <div className='aboutme--images'>
                        <img src={medals} alt='Medals' className='aboutme--image' />
                        <img src={run1} alt='Running 1' className='aboutme--image' />
                        <img src={run2} alt='Running 2' className='aboutme--image' />
                        <img src={football} alt='Football' className='aboutme--image' />
                    </div>
                </div>
            </div>
        </section>
    );
}
