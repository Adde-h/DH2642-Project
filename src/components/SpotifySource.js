import { API_CLIENTID, API_CLIENTSECRET, API_REDIRECTURI } from "./SpotifyAPI";

var access_token = null;
//var refresh_token = null;
const ClientSecret = API_CLIENTSECRET;
const ClientID = API_CLIENTID;
const RedirectURI = API_REDIRECTURI;

export function getToken(code) {
	return fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				new Buffer.from(ClientID + ":" + ClientSecret).toString("base64"),
		},
		body:
			"grant_type=authorization_code&code=" +
			code +
			"&redirect_uri=" +
			RedirectURI,
	})
		.then((e) => e.json())
		.then((r) => {
			//console.log("GOT TOKEN", r);
			access_token = r.access_token;
			//refresh_token = r.refresh_token;
		});
}

/* Not used in this version on Webbify
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
*/

export function getUserCred() {
	return fetch("https://api.spotify.com/v1/me/", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	}).then(
		(response) => response.json()
		//.then((res) => console.log("UserCredentials", res))
	);
}

export function searchAPI(props) {
	var op = props.option.toLowerCase();

	return fetch(
		"https://api.spotify.com/v1/search?query=" +
			encodeURI(props.id) +
			"&type=" +
			op +
			"&market=US&limit=20&offset=0",
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}
	);
}
