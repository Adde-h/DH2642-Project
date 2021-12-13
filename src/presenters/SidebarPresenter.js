import React from "react";
import SidebarView from "../views/SidebarView.js";
import setSearch from ".."

export default function SidebarPresenter(props) {
	const [artists, setArtist] = React.useState(
		props.model.artists
	);

	const [playlist, setPlaylist] = React.useState(
		props.model.playlists
	);
	
	const [album, setAlbum] = React.useState(
		props.model.albums
	);

	React.useEffect(() => {
		function obs() {
			setArtist(props.model.artists);
			setPlaylist(props.model.playlists);
			setAlbum(props.model.albums);
		}
		props.model.addObserver(obs);

		return() => {
			props.model.removeObserver(obs);
		};
	}, []);

	return (
		<SidebarView
			artists={props.model.artists}
			playlists={props.model.playlists}
			albums={props.model.albums}
			artistId={["3TVXtAsR1Inumwj472S9r4", "3WrFJ7ztbogyGnTHbHJFl2", 
						"5K4W6rqBFWDnAN6FQUkS6x", "3tNPDodRNuLdezJnTsYOqy"]}
			setSearch={(item) => props.model.setCurrentClick(item)}
		/>
	);
}

/*
    <SidebarView artists={props.artists} playlists={props.playlists} albums={props.albums} />
 */
