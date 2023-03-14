import "../../pages/css/about.css"
import AboutBanner from "../../assets/about_banner.png";
import aboutOpen from "./about_open";
import Dropdown from "../../components/Dropdown/Dropdown";

function About(){
	return(
		<main>
			<section className="about__section__first">
				<img src={AboutBanner} alt="Paysage montagneux"/>
				<div className="about__div"></div>
			</section>
			<section className="about__section__second">
				<Dropdown label="Fiabilité" content={aboutOpen.fiabilite}></Dropdown>
				<Dropdown label="Respect" content={aboutOpen.respect}></Dropdown>
				<Dropdown label="Service" content={aboutOpen.service}></Dropdown>
				<Dropdown label="Sécurité" content={aboutOpen.securite}></Dropdown>
			</section>
		</main>
	)
}

export default About;