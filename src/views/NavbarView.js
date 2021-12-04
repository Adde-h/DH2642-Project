import requestAuthorization from "../components/spotifyRequestAuth";
import onPageLoad from "../../src/components/spotifyRequestAuth.js"
import Login from "../components/Login";

export default function NavbarView(props) {

	return (
		<div class="navbarcontent">
			<input type="text" placeholder="Search.." />
			<div class="profile">
				<Login/>
			</div>
		</div>
	);
}

//<a onClick={() => console.log("TRIGG")}>{props.isLoggedIn ? "Username" : "Login / Sign Up"}</a>

