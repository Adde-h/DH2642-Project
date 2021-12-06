/*
  UNUSED AT THE MOMENT
  TO BE USED IN FUTURE DEVELOPMENT
*/


import { getArtist, search } from "../components/SpotifySource";

function giveOptions(opt) {
	return <option> {opt} </option>;
}

function eventPrinter(evt) {
	console.log(evt);
}
/*
export default function SearchFormView(props) {
	return (
		<div>
			<input
				type="text"
				placeholder="Insert Artist ID"
				className="searchArtist"
				id="myInput"
			/>
			<button
				onClick={() =>
					search({
						id: document.getElementById("myInput").value,
						option: "artists",
					})
				}></button>
			<select onChange={(event) => props.onDishType(event.target.value)}>
				{props.options.map((giveOptions) => (
					<option value={giveOptions.value} id="op">
						{giveOptions}
					</option>
				))}
			</select>
		</div>

		
    <div>
      <input onInput={(e) => props.onText(e.target.value)} />
      <select onChange={(event) => props.onDishType(event.target.value)}>
        <option>Choose:</option>
        {props.options.map(giveOptions)}
      </select>
      <button onClick={(event) => props.onSearch()}>search!</button>
      <button onClick={() => window.location.hash="#summary"} style="margin-left:10px"> Summary </button>
    </div>
    
	)
}
*/
/*
function SearchResultsView(props) {
	return (
		<div>
			{props.searchResults.map((result) => {
				return (
					<span
						class="searchResult"
						key={result.id}
						onClick={() => {
							props.dishChosen(result.id);
							window.location.hash = "#details";
						}}>
						<img
							src={"https://spoonacular.com/recipeImages/" + result.image}
							height="100"
						/>
						<div>{result.title}</div>
					</span>
				);
			})}
		</div>
	);
}
*/
