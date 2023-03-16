//Import de la décoration de la page "À Propos".
import "../../pages/css/about.css"

//Import de la bannière de la page "À Propos".
import AboutBanner from "../../assets/about_banner.png";

//Import du contenu des menus déroulants.
import aboutOpen from "./about_open";

//Import du menu déroulant.
import Dropdown from "../../components/Dropdown/Dropdown";

//Fonction de paramétrage de la page "À Propos".
function About(){

	//Compilation de la page "À Propos".
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

//Export de la page "À Propos", pour un usage externe.
export default About;