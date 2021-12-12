import { getToken, getUserCred, searchAPI } from "../src/components/SpotifySource.js";

let userData = null;

export default class SpotifyModel {
	constructor(
		code = "",
		userID = "",
		username="",
		isLoggedIn = false,
		artists = [],
		playlists = [],
		albums = [],
		observers = [],
		currentSearch = null,
		searchType = "track"
	) {
		this.observers = observers;
		this.code = code;
		this.isLoggedIn = isLoggedIn;
		this.setArtists(artists);
		this.setPlaylists(playlists);
		this.setAlbums(albums);
		this.currentSearch = currentSearch;
		this.searchType = searchType;
		this.setUserID(userID);
		this.username = username;
	}

	setCode(code) {
		this.code = code;
		this.notifyObservers();
	}

	async checkRedirect() {
		console.log("checkRedirect");
		if (
			window.location.href.includes("callback") &&
			this.isLoggedIn === false
		) 
		{
			console.log("Redirected");
			this.setLoggedIn(true);
			this.setCode(new URLSearchParams(window.location.search).get("code"));
			console.log("code : " + this.code);
			getToken(this.code);
			setTimeout(() => {this.fetchUserData()} , 1000);
			
		}
	}
	
	fetchUserData(){
		userData = getUserCred();
		console.log("userData", userData);
		this.setUserID(userData.id);
		this.setUsername(userData.display_name);
	}


	setLoggedIn(isLoggedIn) {
		this.isLoggedIn = isLoggedIn;
		console.log("setLoggedIn", isLoggedIn);
		this.notifyObservers();
	}

	setUserID(userID) {
		this.userID = userID;
		this.notifyObservers();
	}

	setUsername(username) {
		this.username = username;
		this.notifyObservers();
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

	setCurrentSearch(search) {
		if (
			this.currentSearch === search.query &&
			this.searchType === search.option
		) {
			console.log("Trigg");
			return;
		}
		this.searchType = search.option;
		this.currentSearch = search.query;
		this.currentSearchDetails = null;
		this.currentSearchError = null;
		this.notifyObservers();
		console.log("setCurrentSearch", search);
		if (this.currentSearch) {
			searchAPI({ id: this.currentSearch, option: search.option }).then(
				(response) => {
					response.json().then((data) => {
						console.log("DATA", data);
						if (data.error || data.length === 0) {
							this.currentSearchError = data.error;
							this.notifyObservers();
							console.log("SEARCHERROR", data.error);
						} else {
							this.currentSearchDetails = data;
							this.notifyObservers();
							console.log("SEARCHDATA", data);
						}
					});
				}
			);
		}
	}

	addObserver(callback) {
		this.observers = [...this.observers, callback];
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
