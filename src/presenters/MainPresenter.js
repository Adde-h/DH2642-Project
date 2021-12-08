import MainView from "../views/MainView.js";

const id = "3tNPDodRNuLdezJnTsYOqy";

export default function MainPresenter(props) {
	console.log(props);
	return <MainView isLoggedIn={props.model.isLoggedIn} 
					currentItem = {props.model.currentItem} 
					options={["Tracks", "Artists", "Albums"]}/>;
}
