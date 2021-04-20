import React from 'react';
// import API from '../utils/API';
import quotes from "../quotes.json"
// import { Link } from "react-router-dom";

const Navbar = () => {
	// Create state variables


	let quote = quotes[Math.floor(Math.random() * quotes.length)]
	console.log(quote);
	let navQuote = `${quote.q} ~ ${quote.a}`;
	console.log(quote.q)

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Jot Logo
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<span className="navbar-text" style={{ textAlign: 'center' }}>
					{navQuote}
				</span>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Something
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Something Else
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
