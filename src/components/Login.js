import React from "react";

const AUTH_URL =
	"https://accounts.spotify.com/authorize?client_id=d1e2c8099a8d4bb1a5f47c84bdfb9d44&response_type=code&redirect_uri=http://localhost:3000/callback/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
	return (
		<div>
			<a className="btn btn-success btn-lg" href={AUTH_URL}>
				Login With Spotify
			</a>
		</div>
	);
}
