import {
	getToken,
	getUserCred,
	searchAPI,
} from "../src/components/SpotifySource.js";

export default class SpotifyModel {
	constructor(
		code = "",
		userID = "",
		username = "",
		isLoggedIn = false,
		artists = [],
		playlists = [],
		albums = [],
		observers = [],
		currentSearch = null,
		searchType = "track",
		currentClick = null,
		firstTime = true,
		addingToDatabase = false
	) {
		this.observers = observers;
		this.code = code;
		this.isLoggedIn = isLoggedIn;
		this.artists = artists;
		this.playlists = playlists;
		this.albums = albums;
		this.currentSearch = currentSearch;
		this.searchType = searchType;
		this.currentClick = currentClick;
		this.setUser(userID, username);
		this.firstTime = firstTime;
		this.addingToDatabase = addingToDatabase;
	}

	setCode(code) {
		this.code = code;
		this.notifyObservers();
	}

	async checkRedirect() {
		if (
			window.location.href.includes("callback") &&
			this.isLoggedIn === false
		) {
			this.setLoggedIn(true);
			this.setCode(new URLSearchParams(window.location.search).get("code"));
			getToken(this.code).then(() => this.fetchUserData());
			this.notifyObservers();
		}
	}

	fetchUserData() {
		getUserCred()
			.then((userData) => this.setUser(userData.id, userData.display_name))
			.then(() => {
				console.log("userData", this.userID, this.username);
				this.notifyObservers();
			});
	}

	add(item) {
		if (item.type === "track") {
			this.setTracks(item);
		} else if (item.type === "album") {
			this.setAlbums(item);
		} else if (item.type === "artist") {
			this.setArtists(item);
		}
	}

	remove(item) {
		if (item.type === "track") {
			this.removeTracks(item);
		} else if (item.type === "album") {
			this.removeAlbums(item);
		} else if (item.type === "artist") {
			this.removeArtists(item);
		}
	}

	setLoggedIn(isLoggedIn) {
		this.isLoggedIn = isLoggedIn;
		this.notifyObservers();
	}

	setUser(userID, username) {
		this.userID = userID;
		this.username = username;
	}

	setArtists(artist) {
		if (!this.artists.includes(artist)) {
			this.artists = [...this.artists, artist];
			this.addingToDatabase = true;
			this.notifyObservers();
		}
	}

	removeArtists(artist) {
		this.artists.forEach((artistData) => {
			if (artist.id === artistData.id) {
				this.artists = [...this.artists].filter(
					(event) => event.id !== artistData.id
				);
				this.addingToDatabase = true;
				this.notifyObservers();
			}
		});
	}

	setAlbums(album) {
		if (!this.albums.includes(album)) {
			this.albums = [...this.albums, album];
			this.addingToDatabase = true;
			this.notifyObservers();
		}
	}

	removeAlbums(album) {
		this.albums.forEach((albumData) => {
			if (album.id === albumData.id) {
				this.albums = [...this.albums].filter(
					(event) => event.id !== albumData.id
				);
				this.addingToDatabase = true;
				this.notifyObservers();
			}
		});
	}

	setTracks(playlist) {
		if (!this.playlists.includes(playlist)) {
			this.playlists = [...this.playlists, playlist];
			this.addingToDatabase = true;
			this.notifyObservers();
		}
	}

	removeTracks(playlist) {
		this.playlists.forEach((playlistData) => {
			if (playlist.id === playlistData.id) {
				this.playlists = [...this.playlists].filter(
					(event) => event.id !== playlistData.id
				);
				this.addingToDatabase = true;
				this.notifyObservers();
			}
		});
	}

	setCurrentSearch(search) {
		if (
			this.currentSearch === search.query &&
			this.searchType === search.option
		) {
			return;
		}
		this.searchType = search.option;
		this.currentSearch = search.query;
		this.currentSearchDetails = null;
		this.currentSearchError = null;
		this.notifyObservers();
		if (this.currentSearch) {
			searchAPI({ id: this.currentSearch, option: search.option }).then(
				(response) => {
					response.json().then((data) => {
						if (data.error || data.length === 0) {
							this.currentSearchError = data.error;
							this.notifyObservers();
						} else {
							this.currentSearchDetails = data;
							this.notifyObservers();
						}
					});
				}
			);
		}
	}

	setCurrentClick(clicked) {
		this.currentClick = clicked;
		console.log(clicked);
		this.notifyObservers();
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
