import React from "react";

export default function MainView(props) {
	console.log('MainView', props);
	return (
		<div className = "main">
		
			<h2>Welcome {props.isLoggedIn ? "Username" : "Guest"}</h2>
			<span>Please sign up or log in to get started</span>

		</div>
	);
}