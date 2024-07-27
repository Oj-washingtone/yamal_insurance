/** @format */
"use client";

export default function Headerdropdown({ Dropped, down }) {
	return (
		<>
			<div
				className={`header-dropdown-container ${
					down ? "header-dropdown-container-active" : ""
				}`}>
				<i
					onClick={() => Dropped(false)}
					className="bi bi-x-lg"></i>
				<ul>
					<li>About Us</li>
					<li>Newsroom</li>
					<li>Careers</li>
					<li>Blog</li>
					<li>Whistleblower Policy</li>
					<li>Help</li>
					<li>Request A Callback</li>
				</ul>
			</div>
		</>
	);
}
