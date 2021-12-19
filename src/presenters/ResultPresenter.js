import React from "react";
import ResultView from "../views/ResultView.js";

export default function ResultPresenter(props) {
	/**
	 * Main Presenter to switch between SearchResults, Artists, Playlists, Albums and Start
	 */
	return (
		<ResultView
			result={props.model.currentClick}
			add = {(item) => props.model.add(item)}
			remove = {(item) => props.model.remove(item)}
		/>
	);
}
