//import logo from "./logo.svg";
import "../src/styles/App.css";
import "../src/styles/home.css";
import NavbarPresenter from "../src/presenters/NavbarPresenter.js";
import SidebarPresenter from "../src/presenters/SidebarPresenter.js";
import MainPresenter from "../src/presenters/MainPresenter.js";
import SearchPresenter from "../src/presenters/SearchPresenter.js";
//import Show from "./presenters/HashPresenter.js";
require("dotenv").config();

function App(props) {
	props.model.checkRedirect();
	return (
		<div className="container">
			<div className="navbar">
				<NavbarPresenter model={props.model} />
			</div>

			<div className="content">
				<div className="main">
					<SearchPresenter model={props.model} />
				</div>
				<SidebarPresenter model={props.model} />
			</div>
		</div>
	);
}

//<MainPresenter model={props.model} />


function defaultRoute() {
	if (
		!["#auth, #start"].find((knownRoute) => knownRoute === window.location.hash)
	)
		window.location.hash = "#start";
}

export default App;

