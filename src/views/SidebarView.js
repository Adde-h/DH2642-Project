import infoView from "../views/MainView.js"
import MainView from "../views/MainView.js"
import MainPresenter  from "../presenters/MainPresenter.js"
import artistChoice from "../presenters/SidebarPresenter.js"


export default function SidebarView(props) {
	return (
		<div className="sidebar">
			<div className="sidecontent">
				<h2>Artists</h2>
				<div>
					{props.artists.map((artists) => {
						return (
							<a href="#" key={artists} onClick={event => props.artistChoice(artists)}>
								{artists}
							</a>
						);
					})}
					<span>{props.currentItem}</span>
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

function myFunction(e){
	console.log("nu "+e);
	MainView(e);
	artistChoice(e);

}