import Login from "../components/Login";
import SearchFormView from "../views/SearchView";
import React from "react";

export default function NavbarPresenter(props) {
	const [searchQuery, setSearchQuery] = React.useState("");
	const [searchType, setSearchType] = React.useState("Track");

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
				<Login loginStatus={props.model.isLoggedIn} />
			</div>
		</div>
	);
}
