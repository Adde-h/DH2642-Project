import React from "react";
import { Link } from 'react-router-dom';


export default function ResultView(props) {
	return (
		<div className="main">		
			<button className="btnInResView"><Link to="/callback">Back to main page</Link></button>
			<button className="btnInResView" onClick={e => props.addArtist(props.result)}>Add Artist to your list!</button>
			<h2>{props.result.name}</h2>
		</div>
	);
}