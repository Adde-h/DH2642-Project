import Login from "../components/Login";
import SearchFormView from "../views/SearchView";
import React from "react";

export default function NavbarPresenter(props) {
	const [searchQuery, setSearchQuery] = React.useState("");
	const [searchType, setSearchType] = React.useState("artists");
	
	console.log("SearchQuery", searchQuery);
	console.log("SearchType", searchType);

	return (
		<div className="navbarcontent">
				<SearchFormView  options={["tracks", "artists", "albums"]} 
				setQuery = {setSearchQuery}
				setType = {setSearchType}
				onSearch={() => props.model.setCurrentSearch({query: searchQuery, option:searchType})}/>
			<div className="profile">
				<Login />
			</div>
		</div>
	);
}