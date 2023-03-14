import "../Footer/Footer.css";
import LogoFooter from "../../assets/logo_footer.svg";

function Footer(){
	const currentYear = new Date().getFullYear();
	return(
		<footer>
			<img src={LogoFooter} alt="Logo Footer"/>
			<p>© {currentYear} Kasa - All rights reserved.</p>
		</footer>
	)
}

export default Footer;