import { getArtist } from "../components/SpotifySource";

export default function SidebarView(props) {
	console.log("Hello" + getArtist(props.artists[0]));
	return (
		<div className="sidebar">
			<div className="sidecontent">
				<h2>Artists</h2>
				<div>
					{props.artists.map((artists) => {						
						return (
							<h3 key={artists}>{getArtist(artists)}</h3>
						);
					})}
				</div>

				<h2>Playlists</h2>
				<div>
					{props.playlists.map((playlists) => {
						return (
							<a href="#" key={playlists}>
								{playlists}
							</a>
						);
					})}
				</div>

				<h2>Albums</h2>
				<div>
					{props.albums.map((albums) => {
						return (
							<a href="#" key={albums}>
								{albums}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}
