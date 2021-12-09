import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import App from "./App";
import SpotifyModel from "./SpotifyModel";
import { BrowserRouter } from 'react-router-dom';

const myModel = new SpotifyModel();
ReactDOM.render(
	<BrowserRouter>
		<App model={myModel}/>
	</BrowserRouter>,
	document.getElementById("root")
);