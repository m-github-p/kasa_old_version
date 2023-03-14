import {NavLink} from "react-router-dom";
import "../../pages/css/error.css";

function Error(){
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

export default Error;