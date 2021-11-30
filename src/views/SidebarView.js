export default function SidebarView(props) {
	return (
		<div class="sidebar">
			<div class="sidecontent">
				<h2>Artists</h2>
				<div>
					{props.artists.map((artists) => {
						return <a href="#" key={artists}>{artists}</a>;
					})}
				</div>

				<h2>Playlists</h2>
				<div>
					{props.playlists.map((playlists) => {
						return <a href="#" key={playlists}>{playlists}</a>;
					})}
				</div>

				<h2>Albums</h2>
				<div>
					{props.albums.map((albums) => {
						return <a href="#" key={albums}>{albums}</a>;
					})}
				</div>
			</div>
		</div>
	);
}
