import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MainView(props) {
	return (
		<div className="main">
			<div className="introText">
				<Card className="cards">
					<CardActionArea>
						<CardContent className="cardCont">
							<Typography gutterBottom variant="h5" component="div">
								<h2>Welcome</h2>
							</Typography>
							<Typography variant="body2" color="white">
								This is <b>Webbify</b> <br />
								A web application created to search artists, songs and albums to
								get useful information!
								<br />
								<br />
								This is Dana Ismail, Daniel Mebrahtu Redi, Adeel Hussain and
								Mehir Seyum Wolde
								<b>
									{" "}
									DH2642 HT21-1 Interaction Programming and the Dynamic Web
								</b>{" "}
								Project.
								<br />
								<br />
								<br />
								<b>To get started using Webbify</b>, <br />
								We would like you to log in with your Spotify account. If you do
								not have a Spotify account, you can easily create a free account
								with your email <a href="https://www.spotify.com/se/signup"> here </a>
								<br />
								Once logged in, we would recommend you take the time to freely
								explore the Webbify by trying to search for your favorite
								artist, on of their song or maybe even their latest album.
								<br />
								<br />
								Feel free to search for your favorite artist, song or album.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
		</div>
	);
}
