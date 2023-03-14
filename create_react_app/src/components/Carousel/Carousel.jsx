import {useState} from "react";
import "../Carousel/Carousel.css";
import LeftArrow from "../../assets/left_arrow.svg";
import RightArrow from "../../assets/right_arrow.svg";

function Carousel({slides}){
	const [currentAsset, setCurrentAsset] = useState(0);
	const previousAsset = () => {
		setCurrentAsset (currentAsset !== 0 ? currentAsset - 1 : (slides.length-1));
	};
	const nextAsset = () => {
		setCurrentAsset (currentAsset !== (slides.length - 1) ? currentAsset + 1 : 0);
	};
	return(
		<section className="carousel__section">
			<div className="carousel__div__first"></div>
			<div className="carousel__div__second" style={{transform:`translateX(-${currentAsset * 100}%)`}}>
				{slides.map((picture, index) => (
					<img className="carousel__img" src={picture} alt={`Image ${index+1} sur ${slides.length}`} key={index}/>))
				}
			</div>
			{slides.length > 1 ? (
				<div className="carousel__arrow">
					<img src={LeftArrow} onClick={previousAsset} alt="Flèche gauche"/>
					<img src={RightArrow} onClick={nextAsset} alt="Flèche droite"/>
				</div>
			) : null}
			<div className="carousel__index">{currentAsset + 1}/{slides.length}</div>
		</section>
	)
}

export default Carousel;