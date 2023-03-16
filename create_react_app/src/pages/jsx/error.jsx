//Import du lien de navigation depuis le React Router DOM.
import {NavLink} from "react-router-dom";

//Import de la décoration de la page "Erreur".
import "../../pages/css/error.css";

//Fonction de paramétrage de la page "Erreur".
function Error(){

	//Compilation de la page "Erreur".
	return(
		<main className="error__main">
			<div className="error__div">
				<h1>404</h1>
				<h2>Oups ! La page que vous demandez n'existe pas.</h2>
				<p><NavLink to="/">Retourner sur la page d'accueil</NavLink></p>
			</div>
		</main>
	)
}

//Export de la page "Erreur", pour un usage externe.
export default Error;