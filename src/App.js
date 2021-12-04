//import logo from "./logo.svg";
import "../src/styles/App.css";
import "../src/styles/home.css";
import NavbarPresenter from "../src/presenters/NavbarPresenter.js";
import SidebarPresenter from "../src/presenters/SidebarPresenter.js";
import MainPresenter from "../src/presenters/MainPresenter.js";
//import Show from "./presenters/HashPresenter.js";
require('dotenv').config();


function App(props) {
	//console.log("APP", props);
	props.model.checkRedirect();
	return (
		<div className="container">
			<div className="navbar">
				<NavbarPresenter model={props.model} />
			</div>

			<div className="content">
				<MainPresenter model={props.model} />
				<SidebarPresenter model={props.model} />
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
