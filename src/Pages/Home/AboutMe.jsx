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
                        I'm a football enthusiast and former school team captain, competing at zonals and inter-state tournaments. In college, I took up running and swimming, completing a biathlon and multiple 10k runs, and I'm currently training for a half marathon. Beyond sports, I'm a self-taught musician, playing the harmonica and learning the guitar. I also have a deep love for food, always eager to explore new cuisines and discover hidden culinary gems. As the sports convener during my undergrad, I enjoyed bringing people together through events, fostering teamwork and a competitive spirit.

My passion for AI and Machine Learning is driven by a desire to solve real-world problems. I specialize in LLMs, NLP, and Generative AI, working on projects ranging from misinformation detection to human-AI interaction. Whether it's building intelligent systems for social impact, developing cutting-edge research, or exploring the future of AI-driven automation, I thrive on pushing the boundaries of innovation and turning complex challenges into solutions. 🚀
                        </p>
                    </div>
                </div>
                <div className="hero--section--img">
                <img src="./img/img6.png" alt="Hero Section" />
            </div>
                <div className='aboutme--images'>
                    <img src={medals} alt='Medals' className='aboutme--image' />
                    <img src={football} alt='Football' className='aboutme--image' />
                    <img src={run1} alt='Running 1' className='aboutme--image' />
                    <img src={run2} alt='Running 2' className='aboutme--image' />
                </div>
            </div>
        </section>
    );
}
