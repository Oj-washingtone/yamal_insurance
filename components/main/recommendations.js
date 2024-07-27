/** @format */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "../../public/img/image4.jpg";
import img2 from "../../public/img/image5.webp";
import img3 from "../../public/img/image3.webp";

export default function Recommendations() {
	const [hoverfirst, setHoverFirst] = useState(false);
	const [hoversecond, setHoverSecond] = useState(false);
	const [hoverthird, setHoverThird] = useState(false);

	return (
		<div className="recommendations-container">
			<div className="recommendations">
				<h3>Explore Our Recommended Products</h3>
				<div className="figure-container">
					<figure
						onMouseEnter={() => setHoverFirst(true)}
						onMouseLeave={() => setHoverFirst(false)}>
						<div className="fig-image">
							<Image
								src={img1}
								alt="image"
								className={`${hoverfirst ? "zoom" : ""}`}
							/>
						</div>
						<figcaption>
							<h4>Yamal Market Fund (KES)</h4>
							<p>
								Invest in Yamal Money Market Fund With As Little As 5,000 And
								Earn Up To 15.38%
							</p>
							<span>
								<i class="bi bi-arrow-right-circle-fill"></i> &nbsp;
								&nbsp;Discover Plan
							</span>
						</figcaption>
					</figure>
					<figure
						onMouseEnter={() => setHoverSecond(true)}
						onMouseLeave={() => setHoverSecond(false)}>
						<div className="fig-image">
							<Image
								src={img2}
								alt="image"
								className={`${hoversecond ? "zoom" : ""}`}
							/>
						</div>
						<figcaption>
							<h4>Y-Care Medical Cover</h4>
							<p>
								Invest in Yamal Money Market Fund With As Little As 5,000 And
								Earn Up To 15.38%
							</p>
							<span>
								<i class="bi bi-arrow-right-circle-fill"></i> &nbsp;
								&nbsp;Discover Plan
							</span>
						</figcaption>
					</figure>
					<figure
						onMouseEnter={() => setHoverThird(true)}
						onMouseLeave={() => setHoverThird(false)}>
						<div className="fig-image">
							<Image
								src={img3}
								alt="image"
								className={`${hoverthird ? "zoom" : ""}`}
							/>
						</div>
						<figcaption>
							<h4>Y-Senior Medical Cover</h4>
							<p>
								Invest in Yamal Money Market Fund With As Little As 5,000 And
								Earn Up To 15.38%
							</p>
							<span>
								<i class="bi bi-arrow-right-circle-fill"></i> &nbsp;
								&nbsp;Discover Plan
							</span>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
}
