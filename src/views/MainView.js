import { getArtist, search } from "../components/SpotifySource";


export default function MainView(props) {
	var query = null;
	return (
		<div className="main">
		
			<h2>Welcome {props.isLoggedIn ? "Username" : "Guest"}</h2>
			<span>Please sign up or log in to get started</span>
			<div>
			
				<input type="text" 
					placeholder="Insert Artist ID"
					className="searchArtist" 
					/*onText={(text) => {
						console.log("QUERY",text);
						//query = text;
					}}*/
					//onKeyPress={() => search(document.getElementById("myInput").value)}
					id="myInput"
					/>
					<button onClick={() => search({id: document.getElementById("myInput").value, option: "tracks"}
					 )}></button>
					<select onChange={(event) => props.onDishType(event.target.value)}>
						{props.options.map(giveOptions => 
							<option value={giveOptions.value} id="op">{giveOptions}</option>
						)}
					</select>
			</div>

		</div>
	);
}

function giveOptions(opt) {
  return <option> {opt} </option>;
}
