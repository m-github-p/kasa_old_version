//Import de la décoration du footer.
import "../Footer/Footer.css";

//Import du logo footer.
import LogoFooter from "../../assets/logo_footer.svg";

//Fonction de paramétrage du footer.
function Footer(){
	
	//Actualisation de l'année de la date.
	const currentYear = new Date().getFullYear();

	//Compilation du footer.
	return(
		<footer>
			<img src={LogoFooter} alt="Logo Footer"/>
			<p>© {currentYear} Kasa - All rights reserved.</p>
		</footer>
	)
}

//Export du footer, pour un usage externe.
export default Footer;