import React from "react";

export default function SearchFormView(props) {
	return (
		<span className="search">
			<input
				type="text"
				placeholder="Search..."
				className="searchArtist"
				onInput={(text) => props.setQuery(text.target.value)}
				onKeyDown={(key) => {
					if (key.keyCode === 13) {
						props.onSearch();
					}
				}}
			/>
			
			<select
				className="searchSelect"
				onChange={(event) => {
					props.setType(event.target.value);
					console.log("SELECT", event.target.value);
				}}>
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
					props.onSearch();
				}}>
				Search!
			</button>
		</span>
	);
}

export function SearchResultsView(props) {
	function getData()
	{
		if(props.searchType === "albums")
		{
			return props.searchResults.albums.items
		}
		else if (props.searchType === "tracks")
		{
			return props.searchResults.tracks.items
		}
		else
		{
			return props.searchResults.artists.items
		}
	}
	console.log("SearchResultsView", props);
	console.log("DATA",getData())
	/**
	 * ONLY WORKS WITH ARTISTS ATM
	 */
	return (
		<div>
			<h1>Search Results!</h1>
			<div className="searchResults">
				{getData().map((results) =>
				{
					return (
						<span key={results.id} className="result">
							<h2>{results.name}</h2>
							<img src={results.images[0].url} width="100px" height="100px"/>
						</span>
					)
				})}
			</div>
		</div>
	);
}