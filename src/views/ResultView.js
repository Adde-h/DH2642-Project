import React from "react";
import { Link } from 'react-router-dom';

export default function ResultView(props) {	
	const type = props.result.type;

	if (props.result.type === "artist") {
		return (
			<div className="main">		
				<button className="btnInResView"><Link to="/callback">Back to main page</Link></button>
				<button className="btnInResView" onClick={() => props.add(props.result)}>Add {type} to your list!</button>
				<button className="btnInResView" onClick={() => props.remove(props.result)}>Remove {type} from your list</button>
				<h1>{props.result.name}</h1>
				<div className="resultDivD">
					<img className="resultImageD" src={props.result.images[0].url} alt="artist img"/>
					<div className="resultTextD">
						This is {props.result.name}. An artist who offers his {props.result.followers.total} unique followers a taste in the {props.result.genres[0]} genre. {props.result.name} has received a spotify ranking of {props.result.popularity} based on the artist's popularity.
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="main">
				<button className="btnInResView"><Link to="/callback">Back to main page</Link></button>
				<button className="btnInResView" onClick={() => props.add(props.result)}>Add {type} to your list!</button>
				<button className="btnInResView" onClick={() => props.remove(props.result)}>Remove {type} from your list</button>
				<h2>{props.result.name}</h2>
			</div>
		);
	}
	
}