import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import App from "./App";
import SpotifyModel from "./SpotifyModel";
import { BrowserRouter } from 'react-router-dom';
import persistModel from "../src/components/firebaseModel.js"

const myModel = new SpotifyModel();
persistModel(myModel);
ReactDOM.render(
	<BrowserRouter>
		<App model={myModel}/>
	</BrowserRouter>,
	document.getElementById("root")
);