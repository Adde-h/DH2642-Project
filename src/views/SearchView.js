import React from "react";

export default function SearchFormView(props) {
	const [searchQuery, setSearchQuery] = React.useState("");
	const [searchType, setSearchType] = React.useState("artists");
	return (
		<span className="search">
			<input
				type="text"
				placeholder="Search..."
				className="searchArtist"
				onInput={(text) =>setSearchQuery(text.target.value)}
				onKeyDown={(key) => {
					if (key.keyCode === 13) {
					console.log("QUERY", searchType);
						props.model.model.model.setCurrentSearch({query: searchQuery, option:searchType});
						console.log("Searching for", searchQuery);
					}
				}}
			/>
			<select
				className="searchSelect"
				onChange={(event) => {setSearchType(event.target.value);console.log("SELECT",event.target.value)}}>
				<option>Choose:</option>
				{props.options.map((giveOptions) => (
					<option value={giveOptions.value} key={giveOptions}>
						{giveOptions}
					</option>
				))}
			</select>

			<button
				className="searchBtn"
				onClick={() => {
					console.log("QUERY", searchType);
					props.model.model.model.setCurrentSearch({query: searchQuery, option:searchType});
				}}>
				Search!
			</button>
		</span>
	);
}

export function SearchResultsView(props) {
	return (
		<div>
			{props.searchResults}
			<h1>Search Results</h1>
		</div>
	);
}
