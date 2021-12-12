import { Link } from 'react-router-dom';
import { setSearch } from "../presenters/SidebarPresenter"
 
export default function SidebarView(props) {
	return (
		<div className="sidebar">
			<div className="sidecontent">
				<h2>Artists</h2>
				<div>
					{props.artists.map((artists) => {
						return (
							<Link to="/details" key={artists} onClick={() => props.setSearch(artists)}>
								{artists}
							</Link>
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
