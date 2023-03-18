//Import des useParams et de la navigation depuis React Router DOM.
import {useParams, Navigate} from "react-router-dom";

//Import des objets "logements".
import logements from "../../logements.json";

//Import des étoiles grise et orange.
import GrayStar from "../../assets/gray_star.svg";
import OrangeStar from "../../assets/orange_star.svg";

//Import du carrousel, du menu déroulant, et des mots-clés (tags).
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";

//Import de la décoration de la page produit.
import "../../pages/css/apartments.css";

//Déclaration et initialisation de l'array "stars".
const stars = [1,2,3,4,5];

//Fonction de paramétrage de la page produit.
function Apartments(){
	const {productId} = useParams();
	const apartment = logements.find((logement) => logement.id === productId);

	//Si le logement existe, alors compilation de la page produit.
	if(apartment){
		return(
			<main className="apartments__main">
				<Carousel slides = {apartment.pictures}></Carousel>
				<section className="apartments__section__first">
					<article className="apartments__article__first">
						<h1>{apartment.title}</h1>
						<p>{apartment.location}</p>
						<Tag tags={apartment.tags}/>
					</article>
					<article className="apartments__article__second">
						<div className="apartments__div__first">
							<p className="apartments__p">{apartment.host.name}</p>
							<img className="apartments__img" src={apartment.host.picture} alt="Annonce logement"/>
						</div>
						<div className="apartments__div__second">
							{stars.map((feedback) => apartment.rating >= feedback ? (
								<img className="star" key={feedback.toString()} src={OrangeStar} alt="Étoile orange"/>
							):(
								<img className="star" key={feedback.toString()} src={GrayStar} alt="Étoile grise"/>
							))}
						</div>
					</article>
				</section>
				<section className="apartments__section__second">
					<Dropdown label="Description" content={apartment.description}/>
					<Dropdown label="Équipements" content={apartment.equipments}/>
				</section>
			</main>
		)
	}

	//Sinon, redirection vers la page d'erreur.
	return(
		<Navigate to="/404"></Navigate>
	)
}

//Export de la page produit, pour un usage externe.
export default Apartments;