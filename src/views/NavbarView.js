import Login from "../components/Login";
import { getArtist, search } from "../components/SpotifySource";

export default function NavbarView(props) {
	var query = { option: null };
	return (
		<div className="navbarcontent">
			<span className="search">
				<input
					type="text"
					placeholder="Search..."
					className="searchArtist"
					id="myInput"
				/>
				
				<select className="searchSelect" onChange={(event) => (query.option = event.target.value)}>
				<option>Choose:</option>
					{props.options.map((giveOptions) => (
						<option value={giveOptions.value} id="op" key={giveOptions}>
							{giveOptions}
						</option>
					))}
				</select>

				<button className="searchBtn"
					onClick={() =>
						search({
							id: document.getElementById("myInput").value,
							option: query.option,
						})
					}>Search!</button>
			</span>

			<div className="profile">
				<Login />
			</div>
		</div>
	);
}

//			<input type="text" placeholder="Search.." />
