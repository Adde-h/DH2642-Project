//import logo from "./logo.svg";
import "../src/styles/App.css";
import "../src/styles/home.css";
import NavbarPresenter from "../src/presenters/NavbarPresenter.js";
import SidebarPresenter from "../src/presenters/SidebarPresenter.js";
import MainPresenter from "../src/presenters/MainPresenter.js";
import SearchPresenter from "../src/presenters/SearchPresenter.js";
import { Routes, Route } from 'react-router-dom'
import ResultPresenter from "../src/presenters/ResultPresenter.js"
//import Show from "./presenters/HashPresenter.js";
require("dotenv").config();

function App(props) {
	props.model.checkRedirect();
	return (
		<Routes>
			<Route path="/" element={

				<div className="container">
					<div className="navbar">
						<NavbarPresenter model={props.model} />
					</div>

					<div className="content">
						<MainPresenter model={props.model} />
						<SidebarPresenter model={props.model} />
					</div>
				</div>} />

			<Route path="/details" element={

				<div className="container">
					<div className="navbar">
						<NavbarPresenter model={props.model} />
					</div>

					<div className="content">
						<ResultPresenter model={props.model} />
						<SidebarPresenter model={props.model} />
					</div>
				</div>} />
		</Routes>
	);
}

export default App;

