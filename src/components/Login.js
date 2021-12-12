import React from "react";
import { API_CLIENTID, API_REDIRECTURI } from "./SpotifyAPI";
var scope = 'user-read-private user-read-email';
var querystring = require('querystring');


export const AUTH_URL =
	"https://accounts.spotify.com/authorize?" +	querystring.stringify({
		response_type: 'code',
		client_id: API_CLIENTID,
		scope: scope,
		redirect_uri: API_REDIRECTURI,
	})


export default function Login(props) {
	console.log("försöker logga in")
	console.log("här" + props.loginStatus)
	return (
		<div>
			<a className="btn btn-success btn-lg" href={AUTH_URL} >
				{props.loginStatus ? "Username" : "Log in with Spotify"}</a>
		</div>
	);
}
