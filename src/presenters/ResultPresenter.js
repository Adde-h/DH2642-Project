import React from "react";
import promiseNoData from "../components/promiseNoData.js";
import ResultView from "../views/ResultView.js";

export default function ResultPresenter(props) {
	/**
	 * Main Presenter to switch between SearchResults, Artists, Playlists, Albums and Start
	 */


	const [moreInfo, setMoreInfo] = React.useState(props.model.moreInfo);
 	console.log("presenterMoreInfo", moreInfo);
	React.useEffect(() => {
		function obs() {
			setMoreInfo(props.model.moreInfo);
		}
		props.model.addObserver(obs);

		return() => {
			props.model.removeObserver(obs);
		};
	}, [props.model.moreInfo]);

console.log("ResultPresenter", props.model.currentClick);
		return (
			promiseNoData(moreInfo, props.model.moreInfo, null) || 
		<ResultView
			moreInfo={moreInfo}
			result={props.model.currentClick}
			add = {(item) => props.model.add(item)}
			remove = {(item) => props.model.remove(item)}
		/>
	);
}
