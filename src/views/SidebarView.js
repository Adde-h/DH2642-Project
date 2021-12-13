import { Link } from 'react-router-dom';
import { setSearch } from "../presenters/SidebarPresenter"
 
export default function SidebarView(props) {
	console.log("SidebarView test", props);
	return (
		<div className = "sidebar">
			<div className={props.loginStatus ? "" : "hidden"}>
				<div className="sidecontent">
					<h2>My Artists</h2>
					<div>
						{props.artists.map((artists) => {
							return (
								<Link to="/details" key={artists} onClick={() => props.setSearch(artists)}>
									{artists}
								</Link>
							);
						})}
					</div>

					<h2>My Playlists</h2>
					<div>
						{props.playlists.map((playlists) => {
							return (
								<a href="#" key={playlists}>
									{playlists}
								</a>
							);
						})}
					</div>

					<h2>My Albums</h2>
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

			<div className={props.loginStatus ? "hidden" : ""}>
				<h3 className='offSidebar'>Log in or sign up!</h3>
				<h3 className='offSidebar'>Save your favorites artists, albums and tracks here!</h3>
			</div>
			
		</div>
	);
}
