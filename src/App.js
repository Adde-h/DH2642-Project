//import logo from "./logo.svg";
import "../src/styles/App.css";
import "../src/styles/home.css";
import NavbarPresenter from "../src/presenters/NavbarPresenter.js";
import SidebarPresenter from "../src/presenters/SidebarPresenter.js";
import MainPresenter from "../src/presenters/MainPresenter.js";
import Show from "./presenters/HashPresenter.js";
//import onPageLoad from "../src/components/spotifyRequestAuth.js"



function App(props) {
	return (
		<div className="container">
			<div class="navbar">
			<NavbarPresenter model = {props.model}/>
			</div>

			<div class="content">
				<MainPresenter model = {props.model}/>
				<SidebarPresenter model = {props.model}/>
			</div>
		</div>
	);
}

function defaultRoute() {
	if (
		!["#auth, #start"].find((knownRoute) => knownRoute === window.location.hash)
	)
		window.location.hash = "#start";
}



export default App;
