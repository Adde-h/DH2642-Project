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
				<div>Här</div>
				<h4>testar här igen</h4>
				<span>Ladda bild</span>
			</span>

		</div>
	);
}


