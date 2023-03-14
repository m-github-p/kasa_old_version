import {NavLink} from "react-router-dom";
import "../Header/Header.css";
import LogoHeader from "../../assets/logo_header.svg";

function Header(){
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

export default Header;