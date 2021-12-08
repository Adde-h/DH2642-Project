import React from "react";
import MainView from "../views/MainView.js";

export default function MainPresenter(props) {

	/**
	 * Main Presenter to switch between SearchResults, Artists, Playlists, Albums and Start
	 */
	
	return (
		<MainView isLoggedIn={props.model.isLoggedIn} query={props.model.query} model = {props}/>
	);
}
