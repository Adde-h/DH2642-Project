import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import App from "./App";
import SpotifyModel from "./SpotifyModel";
require('dotenv').config();

const myModel = new SpotifyModel();
ReactDOM.render(
	<React.StrictMode>
		<App model={myModel}/>
	</React.StrictMode>,
	document.getElementById("root")
);