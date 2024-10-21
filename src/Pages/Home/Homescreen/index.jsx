import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Extras from '../Extra';
import Certs from "../Certs";
import WorkExperience from "../Experience";
export default function Home() {
    return (
        <>

            
            <HeroSection />
            
            <WorkExperience />
            <MyPortfolio />
            <MySkills />
            <Certs />
            <Extras />
            {/* <AboutMe/> */}
            <ContactMe />

        </>
    );
}