import "../Tag/Tag.css";

function Tag({tags}){
	return(
		<ul className="tags__ul">
			{tags.map((tag, index) => <li className="tags__li" key={index}>{tag}</li>)}
		</ul>
	)
}

export default Tag;