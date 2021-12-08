import NavbarView from "../views/NavbarView.js";

export default function NavbarPresenter(props) {
	return (
		<NavbarView isLoggedIn={props.model.isLoggedIn} options={["tracks", "artists", "albums"]}/>
	)
}
