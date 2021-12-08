import React from "react";
import { API_CLIENTID, API_REDIRECTURI } from "./SpotifyAPI";
import { getUsername } from "./SpotifySource";
const AUTH_URL =
	"https://accounts.spotify.com/authorize?client_id="+ API_CLIENTID +"&response_type=code&redirect_uri=" + API_REDIRECTURI + "&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";



export default function Login(props) {
	if(props.isLoggedIn === false){
		return (
			<div>
				<a className="btn btn-success btn-lg" href={AUTH_URL}>
					Login With Spotify
				</a>
			</div>
		);
	}
	else if (props.isLoggedIn === true){
		return (
			<div>
				<a className="btn btn-success btn-lg" href={AUTH_URL}>
					username {getUsername()}
				</a>
			</div>
		);
	}
	else {
		
	return (
		<div>
			<a className="btn btn-success btn-lg" href={AUTH_URL}>
				something went wrong
			</a>
		</div>
	);
	}
}
