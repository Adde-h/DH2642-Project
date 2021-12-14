import React from "react";
import SearchResultView from "./SearchView.js";
import promiseNoData from "../components/promiseNoData.js";
import { Link } from 'react-router-dom';


export default function ResultView(props) {
	return (
		<div className="main">		
        <button><Link to="/callback">Back to main page</Link></button>
		<h2>{props.result.name}</h2>
		
		</div>
	);
}