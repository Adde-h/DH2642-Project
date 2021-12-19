import MainView from "../views/MainView.js";
import React from "react";

export default function MainPresenter(props) {

	return (
		<MainView loginStatus={props.model.isLoggedIn} query={props.model.query}/>
	);
}
