import React from "react";
import ResultView from "../views/ResultView.js";

export default function ResultPresenter(props) {
	
	return (
		<ResultView
			result={props.model.currentClick}
			add = {(item) => props.model.add(item)}
			remove = {(item) => props.model.remove(item)}
		/>
	);
}
