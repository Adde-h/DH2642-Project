import Login from "../components/Login";
import SearchFormView from "../views/SearchView";
import React from "react";

export default function NavbarPresenter(props) {
	const [searchQuery, setSearchQuery] = React.useState("");
	const [searchType, setSearchType] = React.useState("Track");
	const [username, setUsername] = React.useState("");
	
	React.useEffect(() => {
		function obs() {
			setUsername(props.model.artists);
		}
		props.model.addObserver(obs);

		return() => {
			props.model.removeObserver(obs);
		};
	}, []);


	console.log("SearchQuery", searchQuery);
	console.log("SearchType", searchType);

	return (
		<div className="navbarcontent">
			<SearchFormView
				options={["Track", "Artist", "Album"]}
				setQuery={setSearchQuery}
				setType={setSearchType}
				onSearch={() =>
					props.model.setCurrentSearch({
						query: searchQuery,
						option: searchType,
					})
				}
			/>
			<div className="profile">
				<Login loginStatus={props.model.isLoggedIn} username={props.model.username} />
			</div>
		</div>
	);
}
