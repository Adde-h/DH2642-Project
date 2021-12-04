import React from "react";
import ReactDOM from "react-dom";
import { onPageLoad } from "../components/spotifyRequestAuth";

function Show(props) {
	const [hashState, setHash] = React.useState(window.location.hash);
	React.useEffect(function () {
		const listener = function () {
			setHash(window.location.hash);
		};
		window.addEventListener("hashchange", listener); // 1 subscribe
		//window.addEventListener("hashchange", onPageLoad());
		return function () {
			window.removeEventListener("hashchange", listener);
		}; // 2
	}, []);

	return <span>{hashState}</span>;
}

export default Show;
