var SpotifyWebApi = require("spotify-web-api-node");

app.post("/login", (req, res) => {
	const code = req.body.code;

	var spotifyApi = new SpotifyWebApi({
		clientId: "d1e2c8099a8d4bb1a5f47c84bdfb9d44",
		clientSecret: "b14fd2bc4db04bb2be9ea5fc2658cb93",
		redirectUri: "http://localhost:3000/callback/",
	});

	spotifyApi.authorizationCodeGrant(code).then((data) => {
		res
			.json({
				access_token: data.body.access_token,
				refresh_token: data.body.refresh_token,
				expires_in: data.body.expires_in,
			})
			.catch(() => {
				res.sendStatus(400);
			});
	});
});
