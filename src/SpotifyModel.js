
import { spotifyApi } from "./components/APIConfig";
//import { response, require } from "express";
//const express = require("express");
//const app = express();
const SpotifyWebApi = require("spotify-web-api-node");
require('dotenv').config();

export default class SpotifyModel {
	constructor(
		code = "",
		isLoggedIn = false,
		artists = [],
		playlists = [],
		albums = [],
		observers = []
	) {
		this.observers = observers;
		this.code = code;
		this.isLoggedIn = isLoggedIn;
		this.setArtists(artists);
		this.setPlaylists(playlists);
		this.setAlbums(albums);
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



function getToken(code) {
	console.log("ID", process.env.API_CLIENTID);
	console.log("secret", process.env.API_CLIENTSECRET);
	fetch("https://accounts.spotify.com/api/token",  {
		method: 'POST',
		headers: {
			'Authorization': 'Basic ' + (new Buffer( process.env.API_CLIENTID + ':' + process.env.API_CLIENTSECRET).toString('base64'))
		},
		form: {
			code: code,
			redirect_uri: spotifyApi.redirectUri,
			grant_type: 'authorization_code'
		},
		json: true
	})
	.then(response => console.log(response));
}

/*
function getToken(code) {
fetch("https://accounts.spotify.com/api/token",  {
		method: 'POST',
		data: {
      "grant_type":    "authorization_code",
      "code":          code,
      "redirect_uri":  spotifyApi.redirectUri,
      "client_secret": spotifyApi.client_secret,
      "client_id":     spotifyApi.client_id,
    },
    success: function(result) {
      console.log("result",result);
    }
	})
}



			var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };
*/