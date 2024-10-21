import { useEffect } from 'react';
import { Link } from 'react-scroll';
import data from '../../data/index.json';
import GitHubIcon from '../../data/github.png'; // Update with the correct path to your GitHub icon
import GitHubIcon2 from '../../data/github-mark.png';

export default function MyPortfolio() {
    const portfolios = data.portfolio || [];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.portfolio--section--card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, index * 600);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const section = document.querySelector('.portfolio--section');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const isLastPortfolioCentered = portfolios.length % 2 === 1; // Check if the last portfolio needs centering

    return (
        <section className='portfolio--section' id='MyPortfolio'>
            <div className='portfolio--container--box'>
                <div className='portfolio--container'>
                    <p className='sub--title'></p>
                    <h2 className='portfolio--section--heading'>
                        Portfolio
                    </h2>
                </div>
                <div>
                    <a style={{ textDecoration: 'none' }} href='https://github.com/saurabh285?tab=repositories'>
                        <button className='btn btn-github'>
                            <img src={GitHubIcon} alt="GitHub" className='github-icon' />
                            Visit My GitHub
                        </button>
                    </a>
                </div>
            </div>
            <div className={`portfolio--section--container ${isLastPortfolioCentered ? 'centered' : ''}`}>
                {portfolios.map((item, index) => (
                    <div key={index} className='portfolio--section--card'>
                        <div className='portfolio--section--img'>
                            <img src={item.src} alt={item.title} />
                        </div>
                        <div className='portfolio--section--card--content'>
                            <div>
                                <h3 className='portfolio--section--title'>{item.title}</h3>
                                <p className='text-md'>
                                    {item.description}
                                </p>
                            </div>
                            <p className="text-sm portfolio--link">
                                {item.link ? (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <a href={item.link} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                                        <img src={GitHubIcon2} alt="GitHub" className='github-icon' />
                                        <span className='viewgithub' style={{ marginLeft: '8px', verticalAlign: 'middle', color: '#000' }}>
                                            View in GitHub
                                        </span>
                                    </a>
                                </div>
                                
                                
                                ) : (
                                    <Link
                                        // onClick={closeMenu}
                                        // activeClass="navbar--active-content"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        to="contactme"
                                        className="btn btn-outline-primary"
                                    >
                                        Get in touch to know more
                                    </Link>
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
