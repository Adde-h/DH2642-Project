import React from "react";
import ResultView from "../views/ResultView.js";

export default function ResultPresenter(props) {
	/**
	 * Main Presenter to switch between SearchResults, Artists, Playlists, Albums and Start
	 */
console.log("ResultPresenter", props.model.currentClick);
	return (
		<ResultView
			result={props.model.currentClick}
			addArtist={(item) => props.model.setArtists(item)}
			addAlbum={(item) => props.model.setAlbums(item)}
			addTrack={(item) => props.model.setTracks(item)}
			remArtist={(item) => props.model.removeArtists(item)}
			remAlbum={(item) => props.model.removeAlbums(item)}
			remTrack={(item) => props.model.removeTracks(item)}
			add = {(item) => props.model.add(item)}
			remove = {(item) => props.model.remove(item)}
		/>
	);
}
