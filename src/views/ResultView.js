import React from "react";
import { Link } from 'react-router-dom';

export default function ResultView(props) {	
	const type = props.result.type;

	return (
		<div className="main">		
			<button className="btnInResView"><Link to="/callback">Back to main page</Link></button>
			<button className="btnInResView" onClick={() => props.add(props.result)}>Add {type} to your list!</button>
			<button className="btnInResView" onClick={() => props.remove(props.result)}>Remove {type} from your list</button>
			<h2>{props.result.name}</h2>
		</div>)
}