/** @format */

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HomePage from "@/components/main/homepage";

export default function Home() {
	return (
		<>
			<div className="main-container">
				<Header />
				<HomePage />
				<Footer />
			</div>
		</>
	);
}
