import { API_CLIENTID, API_CLIENTSECRET, API_REDIRECTURI } from "./SpotifyAPI";

var access_token = null;
const ClientSecret = API_CLIENTSECRET;
const ClientID = API_CLIENTID;
const RedirectURI = API_REDIRECTURI;

export function getToken(code) {
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

export function getUsername() {
	return fetch("https://api.spotify.com/v1/me", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
		.then((response) => console.log(response.json()));
}

export function searchAPI(props) {
	console.log("searchAPI", props);
	var op = props.option.toLowerCase();
	console.log("OPTION:", op);

	return fetch(
		"https://api.spotify.com/v1/search?query=" +
			encodeURI(props.id) +
			"&type=" +
			op +
			"&market=SE&limit=10&offset=0",
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}
	);
}
