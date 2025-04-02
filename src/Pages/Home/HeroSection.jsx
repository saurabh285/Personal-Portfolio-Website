import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn & GitHub icons
import doc from './SaurabhSingh_Resume.pdf';
import hpeImage from '../../data/HPE.png';
import nusImage from '../../data/NUS.png';
import ntuImage from '../../data/NTU.png';

export default function HeroSection() {
    return (
        <section id="HeroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Greetings! I'm Saurabh,
                    </p>
                    
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            AI/ML
                        </span>
                        <br />
                        Enthusiast
                    </h1>
                    
                    <p className="hero--section--description">
                        <b>Research Engineer</b> at <b>Nanyang Technological University, Singapore</b>. 
                        <br />
                        With a postgraduate degree in Artificial Intelligence from the 
                        <br />
                        <b>National University of Singapore</b>. 
                        <br />
                        My expertise spans Neural Networks, Machine Learning, and impactful research, 
                        backed by three years of Software Engineering experience at 
                        <br /><b>Hewlett Packard Enterprise</b>.
                        <br />
                        <br />
                        <a href={doc} download target='_blank' className='btn btn-outline-primary'> Download CV</a>
                        <div className="social-icons">
                        <a href="https://www.linkedin.com/in/saurabh-singh-0528/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/saurabh285" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon">
                            <FaGithub />
                        </a>
                    </div>
                    </p>

                    
                </div>

                <div className="hero--section--images">
                    <img src={hpeImage} alt="Hewlett Packard Enterprise" className="hero--section--image" />
                    <img src={nusImage} alt="National University of Singapore" className="hero--section--image" />
                    <img src={ntuImage} alt="Nanyang Technological University" className="hero--section--image" />
                </div>
            </div>

            <div className="hero--section--img">
                <img src="./img/img6.png" alt="Hero Section" />
            </div>

            {/* CSS Styles */}
            <style jsx>{`
                .social-icons {
    display: flex;
    justify-content: center;  /* Centers icons */
    align-items: center;
    gap: 15px;  /* Space between icons */
    margin-top: 20px;  /* Adds space between button and icons */
}

.social-icon {
    font-size: 30px; /* Adjust icon size */
    transition: color 0.3s ease-in-out;
}

.social-icon a {
    text-decoration: none;
}

/* LinkedIn Styling */
.social-icon:nth-child(1) {
    color: #0077b5; /* LinkedIn blue */
}

.social-icon:nth-child(1):hover {
    color: #005582; /* Darker LinkedIn blue */
}

/* GitHub Styling */
.social-icon:nth-child(2) {
    color: #333; /* GitHub black */
}

.social-icon:nth-child(2):hover {
    color: #000;
}

            `}</style>
        </section>
    );
}
