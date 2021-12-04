export default class SpotifyModel {
  constructor(code = "", isLoggedIn = false, artists = [], playlists = [], albums = [], observers = []) {
		this.observers = observers;
    this.code = code;
		this.isLoggedIn = isLoggedIn;
    this.setArtists(artists);
    this.setPlaylists(playlists);
    this.setAlbums(albums);
	}


  setCode(code) {

  }

  setLoggedIn(isLoggedIn) 
  {
    const code = new URLSearchParams(window.location.search).get("code")
    if (code) {
      this.isLoggedIn = isLoggedIn;
      console.log("code", code);
    }
  }

  setArtists(artists)
	{ 
		this.artists= [...artists]; 
		this.notifyObservers();
	}

  setAlbums(albums)
	{ 
		this.albums= [...albums]; 
		this.notifyObservers();
	}

  setPlaylists(playlists)
	{ 
		this.playlists= [...playlists]; 
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
