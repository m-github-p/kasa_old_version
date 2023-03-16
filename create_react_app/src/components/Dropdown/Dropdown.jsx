//Import de l'useState depuis React.
import {useState} from "react";

//Import de la décoration du menu déroulant.
import "./Dropdown.css";

//Import de la flèche du menu déroulant.
import DropdownArrow from "../../assets/dropdown_arrow.svg";

//Fonction de paramétrage du menu déroulant.
function Dropdown(props){
	const [expand, setExpand] = useState(false);
	function button(){
		setExpand(!expand)
	}

	//Compilation du menu déroulant.
	return(
		<article className="dropdown__article">
			<button className="dropdown__button" onClick={button}>
				<span>{props.label}</span>
				<img className={expand ? "dropdown__arrow__180" : "dropdown__arrow"} src={DropdownArrow} alt="Ouvrir / Fermer"/>
			</button>
			{(
				Array.isArray(props.content) ?
				<ul className={expand ? "dropdown__content" : "dropdown__hidden"}>
					{props.content.map((equipments, index) => (
						<li key={index}>{equipments}</li>))
					}
				</ul>
				: <p className={expand ? "dropdown__content" : "dropdown__hidden"}>{props.content}</p>
			)}
		</article>
	)
}

//Export du menu déroulant, pour un usage externe.
export default Dropdown;