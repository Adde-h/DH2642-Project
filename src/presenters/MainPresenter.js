import MainView from "../views/MainView.js";

const id = "3tNPDodRNuLdezJnTsYOqy";

export default function MainPresenter(props) {
	return <MainView isLoggedIn={props.isLoggedIn} artist = {id} options={["Tracks", "Artists", "Albums"]}/>;
}
