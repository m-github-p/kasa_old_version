import {useState} from "react";
import "./Dropdown.css";
import DropdownArrow from "../../assets/dropdown_arrow.svg";

function Dropdown(props){
	const [expand, setExpand] = useState(false);
	function button(){
		setExpand(!expand)
	}
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

export default Dropdown;