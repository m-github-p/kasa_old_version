//Import du lien de navigation depuis React Router DOM.
import {NavLink} from "react-router-dom";

//Import de la décoration de la page d'accueil.
import "../../pages/css/home.css";

//Import de la bannière de la page d'accueil.
import HomeBanner from "../../assets/home_banner.png";

//Imports des objets "logements".
import logements from "../../logements.json";

//Import de la card.
import Thumb from "../../components/Thumb/Thumb";

//Fonction de paramétrage de la page d'accueil.
function Home(){

	//Compilation de la page d'accueil.
	return(
		<main>
			<section className="home__section__first">
				<img src={HomeBanner} alt="Paysage maritime"/>
				<h1 className="home__h1">Chez vous, partout et ailleurs</h1>
				<div className="home__div"></div>
			</section>
			<section className="home__section__second">
				{logements.map((logement, index) => {
					return(
						<NavLink key={index} to={`/products/${logement.id}`}>
							<Thumb key={index} cover={logement.cover} title={logement.title}></Thumb>
						</NavLink>
					)
				})}
			</section>
		</main>
	)
}

//Export de la page d'accueil, pour un usage externe.
export default Home;