import getToken from '../src/components/SpotifySource.js';
//const SpotifyWebApi = require("spotify-web-api-node");

export default class SpotifyModel {
	constructor(
		code = "",
		isLoggedIn = false,
		artists = [],
		playlists = [],
		albums = [],
		observers = [], 
		currentItem = ""
	) {
		this.observers = observers;
		this.code = code;
		this.isLoggedIn = isLoggedIn;
		this.setArtists(artists);
		this.setPlaylists(playlists);
		this.setAlbums(albums);
		this.CurrentItem = currentItem;
	}

	setCode(code) {
		this.code = code;
	}

	checkRedirect() {
		console.log("checkRedirect");
		if (
			window.location.href.includes("callback") &&
			this.isLoggedIn === false
		) {
			console.log("Redirected");
			this.setLoggedIn(true);
			this.setCode(new URLSearchParams(window.location.search).get("code"));
			console.log("code : " + this.code);
			getToken(this.code);
		}
	}

	setLoggedIn(isLoggedIn) {
		this.isLoggedIn = isLoggedIn;
		console.log("setLoggedIn", isLoggedIn);
	}

	setArtists(artists) {
		this.artists = [...artists];
		this.notifyObservers();
	}

	setAlbums(albums) {
		this.albums = [...albums];
		this.notifyObservers();
	}

	setPlaylists(playlists) {
		this.playlists = [...playlists];
		this.notifyObservers();
	}

	addObserver(callback) {
		this.observers = [...this.observers, callback];
	}

	setCurrentItem(item){
		this.currentItem = item;
		this.notifyObservers();
	}

	removeObserver(callback) {
		this.observers = this.observers.filter((event) => event !== callback);
	}

	notifyObservers() {
		this.observers.forEach((cb) => {
			setTimeout(() => {
				try {
					cb();
				} catch (e) {
					console.log("Error occured: ", e);
				}
			}, 0);
		});
	}
}

