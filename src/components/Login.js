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

export default function Login() {
	console.log( 'AUTH_URL', AUTH_URL);
	return (
		<div>
			<a className="btn btn-success btn-lg" href={AUTH_URL}>
				Login With Spotify
			</a>
		</div>
	);
}
