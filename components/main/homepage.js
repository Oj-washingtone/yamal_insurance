/** @format */

import "./homepage.css";
import Recommendations from "./recommendations";
import Services from "./services";

export default function HomePage() {
	return (
		<>
			<div className="img-container">
				<div className="img-caption">
					<h3>Yamal Money Market Fund</h3>
					<p> Save And Earn High Returns Of Up To 15.38%</p>
					<button>
						Invest Now <i className="bi bi-arrow-right"></i>
					</button>
				</div>
			</div>
			<Services />
			<Recommendations />
		</>
	);
}
