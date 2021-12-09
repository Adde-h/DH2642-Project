import React from "react";
import promiseNoData from "../components/promiseNoData";
import { SearchResultsView } from "../views/SearchView";
export default function SearchPresenter(props) {

	const [currentSearch, setCurrentSearch] = React.useState(
		props.model.currentSearch
	);
	const [currentSearchDetails, setCurrentSearchDetails] = React.useState(
		props.model.currentSearchDetails
	);
	const [currentSearchError, setCurrentSearchError] = React.useState(
		props.model.currentSearchError
	);

	React.useEffect(() => {
		function obs() {
			setCurrentSearch(props.model.currentSearch);
			setCurrentSearchDetails(props.model.currentSearchDetails);
			setCurrentSearchError(props.model.currentSearchError);
		}
		props.model.addObserver(obs);

		return() => {
			props.model.removeObserver(obs);
		};
	}, []);

	console.log("CURRENTSEARCH", currentSearch);
	console.log("CURRENTSEARCHDETAILS", currentSearchDetails);
	console.log("CURRENTSEARCHERROR", currentSearchError);

	return (
		<div>
			{promiseNoData(
				currentSearch,
				currentSearchDetails,
				currentSearchError
			) || <SearchResultsView searchResults={currentSearchDetails} searchType={props.model.searchType} />}
		</div>
	);
}

