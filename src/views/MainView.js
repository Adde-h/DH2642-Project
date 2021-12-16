import React from "react";

export default function MainView(props) {
	return (
		<div className = "main">
		
			<h2>Welcome {props.username}</h2>
			<span className={props.loginStatus ? "hidden" : ""}>
				<div className="lefttt">
					Welcome (Guest) to <b>Webbify</b> <br />
					A web application created to search artists,
					songs and albums to get useful information!<br /><br />

					This is Dana Ismail, Daniel Mebrahtu Redi,
					Adeel Hussain and Mehir Seyum Wolde
					<b> DH2642 HT20-1 Interaktionsprogrammering och dynamiska webben</b> Project.
					<br /><br /><br />
				</div>

				<div>
					<b>To get started using Webbify</b>, <br />
					We would like you to log in with your Spotify account.
					If you do not have a Spotify account, you can easily create a free account with your email
					https://www.spotify.com/se/signup (href till denna länk)
					<br />
					Once logged in, we would recommend you take the time to freely explore
					the Webbify by trying  to search for your favorite artist, on of their song or maybe even their latest album.
					<br /><br />
				</div>
			</span>
			<span className={props.loginStatus ? "" : "hidden"}>
				(Input text)
				<div>(INSERT LOGO HERE)</div>
			</span>

		</div>
	);
}


