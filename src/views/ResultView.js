import React from "react";
import SearchResultView from "./SearchView.js";
import promiseNoData from "../components/promiseNoData.js";
import { Link } from 'react-router-dom';


export default function MainView(props) {
	console.log('ResultView', props);
	return (
		<div className="main">
		
        <button><Link to="/">back</Link></button>
		</div>
	);
}