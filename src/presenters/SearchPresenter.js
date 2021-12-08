function SearchPresenter(props) {
  const [currentSearch, setCurrentSearch] = React.useState(
		props.model.currentSearch
	);
	const [currentSearchDetails, setCurrentSearchDetails] = React.useState(
		props.model.currentSearchDetails
	);
	const [currentSearchError, setCurrentSearchError] = React.useState(
		props.model.currentSearchError
	);
	const [searchQuery, setSearchQuery] = React.useState("");

	React.useEffect(
		function () {
			function obs() {
				setCurrentSearch(props.model.currentSearch);
				setCurrentSearchDetails(props.model.currentSearchDetails);
				setCurrentSearchError(props.model.currentSearchError);
			}
			props.model.addObserver(obs);
			return function () {
				props.model.removeObserver(obs);
			};
		},
		[props.model]
	);
  
	return (
		<div>
			{promiseNoData(
				props.model.currentSearch,
				props.model.currentSearchDetails,
				props.model.currentSearchError
			) || (
				<SearchResultView searchResults={props.model.currentSearchDetails} />
			)}
		</div>
	);
}
