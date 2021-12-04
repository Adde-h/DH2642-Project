import MainView from "../views/MainView.js";

export default function MainPresenter(props) {
	return <MainView isLoggedIn={props.isLoggedIn} />;
}
