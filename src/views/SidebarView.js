import { Link } from 'react-router-dom';
 
export default function SidebarView(props) {
	return (
		<div className = "sidebar">
			<div className={props.loginStatus ? "" : "hidden"}>
				<div className="sidecontent">
					<h2>My Artists</h2>
					<div>
						{props.artists.map((artists) => {
							return (
								<Link to="/details" key={artists.id} onClick={() => props.setSearch(artists)}>
									{artists.name}
								</Link>
							);
						})}
					</div>

					<h2>My Songs</h2>
					<div>
						{props.playlists.map((playlists) => {
							return (
								<Link to="/details" key={playlists.id} onClick={() => props.setSearch(playlists)}>
									{playlists.name}
								</Link>
							);
						})}
					</div>

					<h2>My Albums</h2>
					<div>
						{props.albums.map((albums) => {
							return (
								<Link to="/details" key={albums.id} onClick={() => props.setSearch(albums)}>
									{albums.name}
								</Link>
							);
						})}
					</div>
				</div>			
			</div>

			<div className={props.loginStatus ? "hidden" : ""}>
				<h3 className='offSidebar'>Log in or sign up!</h3>
				<h3 className='offSidebar'>Save your favorites artists, albums and tracks here!</h3>
			</div>
			
		</div>
	);
}
