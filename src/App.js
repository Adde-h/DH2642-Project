//import logo from "./logo.svg";
import "../src/styles/App.css";
import "../src/styles/home.css";
import SidebarView from "../src/views/SidebarView.js";
import NavbarView from "./views/NavbarView";
import Show from "../src/components/HashPresenter.js";
import MainView from "../src/views/MainView";

function App() {
	const artists = [
		"Drake",
		"Dree Low",
		"Rihanna",
		"Justin Bieber",
		"Katy Perry",
		"Lady Gaga",
	];

	const playlists = [
		"My Music Mix",
		"Summer Playlist",
		"Winter Mix 2021",
		"Sad Songs",
	];

	const albums = ["Donda", "Sour", "After Hours", "Flawless"];
	let isLoggedIn = false;
	defaultRoute();
	return (
		<div className="container">
			<div class="navbar">
				<NavbarView isLoggedIn={isLoggedIn} />
			</div>

			<div class="content">
				<MainView isLoggedIn={isLoggedIn} />
				<SidebarView artists={artists} playlists={playlists} albums={albums} />
			</div>
		</div>
	);
}

function defaultRoute() {
	if (
		!["#auth, #start"].find((knownRoute) => knownRoute === window.location.hash)
	)
		window.location.hash = "#start";
}

export default App;
