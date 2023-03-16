//Import du lien de navigation depuis React Router DOM.
import {NavLink} from "react-router-dom";

//Import de la décoration du header.
import "../Header/Header.css";

//Import du logo header.
import LogoHeader from "../../assets/logo_header.svg";

//Fonction de paramétrage du header.
function Header(){

	//Compilation du header.
	return(
		<header>
			<NavLink className="header__nav__link" to="/">
				<img src={LogoHeader} alt="Logo Header"/>
			</NavLink>
			<nav>
				<ul>
					<li><NavLink className={({isActive}) => (isActive ? "header__li" : null)} to="/">Accueil</NavLink></li>
					<li><NavLink className={({isActive}) => (isActive ? "header__li" : null)} to="/about">À Propos</NavLink></li>
				</ul>
			</nav>
		</header>
	)
}

//Export du header, pour un usage externe.
export default Header;