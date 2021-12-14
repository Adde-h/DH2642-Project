import React from "react";
import ResultView from "../views/ResultView.js";

export default function ResultPresenter(props) {

	/**
	 * Main Presenter to switch between SearchResults, Artists, Playlists, Albums and Start
	 */
	
	return (
		<ResultView result={props.model.currentClick}
					addArtist={item => props.model.setArtists(item)}/>
	);
}