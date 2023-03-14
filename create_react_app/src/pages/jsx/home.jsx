import {NavLink} from "react-router-dom";

import "../../pages/css/home.css";
import HomeBanner from "../../assets/home_banner.png";
import logements from "../../logements.json";
import Thumb from "../../components/Thumb/Thumb";

function Home(){
	return(
		<main>
			<section className="home__section__first">
				<img src={HomeBanner} alt="Paysage maritime"/>
				<h1 className="home__h1">Chez vous, partout et ailleurs</h1>
				<div className="home__div"></div>
			</section>
			<section className="home__section__second">
				{logements.map((logement, index) => {
					return(
						<NavLink key={index} to={`/products/${logement.id}`}>
							<Thumb key={index} cover={logement.cover} title={logement.title}></Thumb>
						</NavLink>
					)
				})}
			</section>
		</main>
	)
}

export default Home;