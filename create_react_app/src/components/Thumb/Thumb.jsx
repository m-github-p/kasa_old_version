//Import de la décoration de la card.
import "../Thumb/Thumb.css";

//Fonction de paramétrage de la card.
function Thumb({title, cover}){

	//Compilation de la card.
	return(
		<article className="thumb__article">
			<img className="thumb__img" src={cover} alt={title}/>
			<h2 className="thumb__h2">{title}</h2>
			<div className="thumb__div"></div>
		</article>
	)
}

//Export de la card, pour un usage externe.
export default Thumb;