export default function MainView(props) {
	console.log(props);
	return (
		<div className="main">
		
			<h2>Welcome {props.isLoggedIn ? "Username" : "Guest"}</h2>
			<span>Please sign up or log in to get started</span>
			&nbsp;
			<span> Hej: {props.currentItem}</span> 
			


		</div>
	);
}

export function infoView(props){
	return (
		<div className="main">
		
			<h2>{props[0]}</h2>

		</div>
	);
}
