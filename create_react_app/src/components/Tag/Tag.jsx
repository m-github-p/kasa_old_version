//Import de la décoration des mots-clés (tags).
import "../Tag/Tag.css";

//Fonction de paramétrage des mots-clés (tags).
function Tag({tags}){

	//Compilation des mots-clés (tags).
	return(
		<ul className="tags__ul">
			{tags.map((tag, index) => <li className="tags__li" key={index}>{tag}</li>)}
		</ul>
	)
}

//Export des mots-clés (tags), pour un usage externe.
export default Tag;