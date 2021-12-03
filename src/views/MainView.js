export default function MainView(props) {
	return (
		<div class="main">
		
			<h2>Welcome {props.isLoggedIn ? "Username" : "Guest"}</h2>
			<span>Please sign up or log in to get started</span>

		</div>
	);
}