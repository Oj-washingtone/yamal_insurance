/** @format */
"use client";
import "./header.css";
import logo from "../../public/img/logo.png";
import Image from "next/image";
import { useState } from "react";
import Headerdropdown from "./headerdropdown";

export default function Header() {
	const [dropDown, setDropDown] = useState(false);

	return (
		<header className="header">
			<Headerdropdown
				down={dropDown}
				Dropped={setDropDown}
			/>
			<nav>
				<div className="logo-container">
					<Image
						src={logo}
						alt="logo"
						height={80}
					/>
				</div>
				<div className="header-links-container">
					<ul>
						<li>About Us</li>
						<li>Newsroom</li>
						<li>Careers</li>
						<li>Blog</li>
						<li>Whistleblower Policy</li>
						<span>
							<li className="help">Help</li>
							<li className="callback-request">Request A Callback</li>
						</span>
					</ul>
					<div className="search-container">
						<i className="bi bi-search"></i>
					</div>
					<div className="menu">
						<i
							onClick={() => setDropDown(true)}
							className="bi bi-list"></i>
					</div>
				</div>
			</nav>

			<section>
				<ul>
					<li>LIFE & PENSION</li>
					<li>HEALTH</li>
					<li>GENERAL</li>
					<li>ASSET MANAGEMENT</li>
					<li>WELLNESS</li>
					<span>
						<li className="buy-now">
							<i className="bi bi-bag-fill"></i>
							<small>Buy Now</small>
						</li>
						<li className="self-service">
							<i className="bi bi-person-fill"></i>
							<small>Self Service</small>
						</li>
					</span>
				</ul>
			</section>
		</header>
	);
}
