import { API_CLIENTID, API_CLIENTSECRET, API_REDIRECTURI } from "./SpotifyAPI";

var access_token = null;
const ClientSecret = API_CLIENTSECRET;
const ClientID = API_CLIENTID;
const RedirectURI = API_REDIRECTURI;

export default function getToken(code) {
	//console.log("ENV: ", RedirectURI);
  //console.log("ID", ClientID);
	//console.log("secret", ClientSecret);
	fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				new Buffer.from(ClientID + ":" + ClientSecret).toString("base64"),
		},
		form: {
			code: code,
			redirect_uri: API_REDIRECTURI,
			grant_type: "authorization_code",
		},
		body: "grant_type=client_credentials",
	})
		.then((e) => e.json())
		.then((r) => {
			console.log(r);
			access_token = r.access_token;
			console.log("access_token", access_token);
		});
}

export function getRefreshToken(access_token) {
	//console.log("ID", ClientID);
	//console.log("secret", ClientSecret);
	fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				new Buffer.from(ClientID + ":" + ClientSecret).toString("base64"),
		},
		form: {
			//code: code,
			//redirect_uri: API_REDIRECTURI,
			grant_type: "refresh-token",
			refresh_token: access_token,
		},
		body: "grant_type=client_credentials",
	})
		.then((e) => e.json())
		.then((r) => console.log(r));
}

export function getArtist(props) {
	fetch("https://api.spotify.com/v1/artists/" + props, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
		.then((response) => response.json())
		.then((res) => console.log(res.name));
}

export function getSong(props) {
	fetch("https://api.spotify.com/v1/tracks/" + props, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
		.then((response) => response.json())
		.then((res) => console.log(res.name));
}

export function getUsername(props) {
	fetch("https://api.spotify.com/v1/me", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
		.then((response) => console.log(response.json()))
}

export function search(props) {
	var op = props.option;

	if (op === "artists") {
		fetch(
			"https://api.spotify.com/v1/search?query=" +
				encodeURI(props.id) +
				"&type=artist" +
				"&market=SE&limit=1&offset=0",
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		).then((response) => {
			response.json().then((res) => {
				console.log("Artist: ", res.artists.items[0].name);
				console.log("Genre: ", res.artists.items[0].genres[0]);
				console.log("Response from api: ", res.artists.items[0]);
			});
		});
	}
	else if (op === "tracks") {
		fetch(
			"https://api.spotify.com/v1/search?query=" +
				encodeURI(props.id) +
				"&type=track" +
				"&market=SE&limit=1&offset=0",
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		).then((response) => {
			response.json().then((res) => {
				console.log("Track: ", res.tracks.items[0].name);
				console.log("Response from API: ", res.tracks.items[0]);
			});
		});
	}
	else if (op === "albums") {
		fetch(
			"https://api.spotify.com/v1/search?query=" +
				encodeURI(props.id) +
				"&type=album" +
				"&market=SE&limit=1&offset=0",
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}
		).then((response) => {
			response.json().then((res) => {
				console.log("Album: ", res.albums.items[0].name);
				console.log("Response from API: ", res.albums.items[0]);
			});
		});
	}
}
