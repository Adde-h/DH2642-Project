import React from "react";
import {Link} from "react-router-dom"

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
				{props.options.map((giveOptions) => (
					<option value={giveOptions.value} key={giveOptions}>
						{giveOptions}
					</option>
				))}
			</select>

			<Link to="/search" type="button" className="searchBtn" role="button"
				onClick={() => {
					props.onSearch();
				}}>
			
				
				Search!
			
			</Link>
			<button onClick={mybtn()}>Search test</button>
		</span>
	);
}

export function mybtn(){
	
}

export function SearchResultsView(props) {
	function getData() {
		if (props.searchType === "Album") {
			return props.searchResults.albums.items;
		} else if (props.searchType === "Track") {
			return props.searchResults.tracks.items;
		} else {
			return props.searchResults.artists.items;
		}
	}
	console.log("DATA", getData());

	if (props.searchType === "Track") {
		return (
			<div>
				<h1>Search Results 2!</h1>
				<button
				className="searchBtn">
				<Link to="/callback">
				Back to main page
				</Link>
			</button>
				<div className="searchResults">
					{getData().map((results) => {
						return (
							<span key={results.id} className="result">
								<h2>{results.name}</h2>
								<img
									src={results.album.images[0].url}
									width="100px"
									height="100px"
								/>
							</span>
						);
					})}
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<h1>Search Results Artists!</h1>
				<button
				className="searchBtn">
				<Link to="/callback">
				Back to main page
				</Link>
			</button>
				<div className="searchResults">
					{getData().map((results) => {
						var imgsrc = "";
						if (results.images.length > 0) {
							imgsrc = results.images[0].url;
						} else {
							imgsrc =
								"https://www.stma.org/wp-content/uploads/2017/10/no-image-icon.png";
						}
						return (
							<span key={results.id} className="result">
								<h2>{results.name}</h2>
								<img src={imgsrc} width="100px" height="100px" />
							</span>
						);
					})}
				</div>
			</div>
		);
	}
}
