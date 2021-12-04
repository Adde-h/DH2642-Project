const AUTHORIZE = "https://accounts.spotify.com/authorize";
const TOKEN = "https://accounts.spotify.com/api/token";

const redirect_uri = "http://localhost:3000/callback/";

const client_id = "d1e2c8099a8d4bb1a5f47c84bdfb9d44";
const client_secret = "b14fd2bc4db04bb2be9ea5fc2658cb93";

var access_token = null;
var refresh_token = null;
var currentPlaylist = "";
var radioButtons = [];

export function onPageLoad() {
	console.log("onPageLoad");
	client_id = localStorage.getItem("client_id");
	client_secret = localStorage.getItem("client_secret");
	if (window.location.search.length > 10) {
		handleRedirect();
	} else {
		access_token = localStorage.getItem("access_token");
		if (access_token == null) {
			// we don't have an access token so present token section
			//document.getElementById("tokenSection").style.display = "block";
		} else {
			// we have an access token so present device section
			//document.getElementById("deviceSection").style.display = "block";
			//refreshDevices();
			//refreshPlaylists();
			//currentlyPlaying();
		}
	}
	//refreshRadioButtons();
}

function requestAuthorization() {
	//localStorage.setItem("client_id", client_id);
	//localStorage.setItem("client_secret", client_secret); // In a real app you should not expose your client_secret to the user
	let url = AUTHORIZE;
	url += "?client_id=" + client_id;
	url += "&response_type=code";
	url += "&redirect_uri=" + encodeURI(redirect_uri);
	url += "&show_dialog=true";
	//url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
	url += "&user-read-private user-read-email";
	window.location.href = url; // Show Spotify's authorization screen
}

function handleRedirect() {
	console.log("TESTTTT");
	let code = getCode();
	fetchAccessToken(code);
	window.history.pushState("", "", redirect_uri); // remove param from url
}

function getCode() {
	let code = null;
	const queryString = window.location.search;
	if (queryString.length > 0) {
		const urlParams = new URLSearchParams(queryString);
		code = urlParams.get("code");
	}
	return code;
}

function fetchAccessToken(code) {
	console.log("fetchAccessToken");
	let body = "grant_type=authorization_code";
	body += "&code=" + code;
	body += "&redirect_uri=" + encodeURI(redirect_uri);
	body += "&client_id=" + client_id;
	body += "&client_secret=" + client_secret;
	callAuthorizationApi(body);
}

function refreshAccessToken() {
	refresh_token = localStorage.getItem("refresh_token");
	let body = "grant_type=refresh_token";
	body += "&refresh_token=" + refresh_token;
	body += "&client_id=" + client_id;
	callAuthorizationApi(body);
}

function callAuthorizationApi(body) {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", TOKEN, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader(
		"Authorization",
		"Basic " + btoa(client_id + ":" + client_secret)
	);
	xhr.send(body);
	xhr.onload = handleAuthorizationResponse;
}

function handleAuthorizationResponse() {
	if (this.status == 200) {
		var data = JSON.parse(this.responseText);
		console.log(data);
		var data = JSON.parse(this.responseText);
		if (data.access_token != undefined) {
			access_token = data.access_token;
			localStorage.setItem("access_token", access_token);
		}
		if (data.refresh_token != undefined) {
			refresh_token = data.refresh_token;
			localStorage.setItem("refresh_token", refresh_token);
		}
		onPageLoad();
	} else {
		console.log(this.responseText);
		alert(this.responseText);
	}
}

export default requestAuthorization;