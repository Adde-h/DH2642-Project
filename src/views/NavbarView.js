import requestAuthorization from "../components/spotifyRequestAuth";

export default function NavbarView(props) {

	return (
		<div class="navbarcontent">
			<input type="text" placeholder="Search.." />
			<div class="profile">
				<a onClick={() => requestAuthorization()}>{props.isLoggedIn ? "Username" : "Login / Sign Up"}</a>
			</div>
		</div>
	);
}
