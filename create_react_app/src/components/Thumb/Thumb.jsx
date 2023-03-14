import "../Thumb/Thumb.css";

function Thumb({title, cover}){
	return(
		<article className="thumb__article">
			<img className="thumb__img" src={cover} alt={title}/>
			<h2 className="thumb__h2">{title}</h2>
			<div className="thumb__div"></div>
		</article>
	)
}

export default Thumb;