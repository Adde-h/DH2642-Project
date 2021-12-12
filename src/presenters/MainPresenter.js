import MainView from "../views/MainView.js";

export default function MainPresenter(props) {

	/**
	 * Main Presenter to switch between SearchResults, Artists, Playlists, Albums and Start
	 */
	
	return (
		<MainView loginStatus={props.model.isLoggedIn} query={props.model.query} username={props.model.username}/>
	);
}
