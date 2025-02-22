import { Link } from "react-scroll";
import doc from './CV.pdf'
import hpeImage from '../../data/HPE.png';
import nusImage from '../../data/NUS.png';
import ntuImage from '../../data/NTU.png';
export default function HeroSection(){
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
                        <br/>
                        Enthusiast

                    </h1>
                    <p className="hero--section--description">
                    <b>Research Engineer</b> at <b>Nanyang Technological University, Singapore</b>. 
                    <br></br>
                    With a postgraduate degree in Artificial Intelligence from the 
                    <br></br>
                    <b>National University of Singapore</b>. 
                        <br/> My expertise spans Neural Networks, Machine Learning, and impactful research, backed by three years of Software Engineering experience at <br /><b>Hewlett Packard Enterprise</b>.
                        <br/>
                        <br/>
                        <br/>
                        <a href={doc} download target='_blank' className='btn btn-outline-primary'> Download CV
                </a>
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
            
        </section>
    )
}