import React from "react";

export default function MainView(props) {
	console.log('MainView', props);	
	return (
		<div className = "main">
		
			<h2>Welcome {props.username}</h2>
			<span className={props.loginStatus ? "hidden" : ""}>
				Please sign up or log in to get started
			</span>
			<span className={props.loginStatus ? "" : "hidden"}>
				(Input text)
			</span>

		</div>
	);
}


