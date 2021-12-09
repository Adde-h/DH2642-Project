import React from "react";
import SearchResultView from "./SearchView.js";
import promiseNoData from "../components/promiseNoData.js";


export default function MainView(props) {
	console.log('MainView', props);
	return (
		<div>
		
			<h2>Welcome {props.isLoggedIn ? "Username" : "Guest"}</h2>
			<span>Please sign up or log in to get started</span>

		</div>
	);
}