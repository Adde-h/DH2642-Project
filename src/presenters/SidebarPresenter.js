import React from "react";
import SidebarView from "../views/SidebarView.js";

export default function SidebarPresenter(props) {
	const [artists, setArtist] = React.useState(props.model.artists);

	const [playlist, setPlaylist] = React.useState(props.model.playlists);

	const [album, setAlbum] = React.useState(props.model.albums);

	React.useEffect(() => {
		function obs() {
			setArtist(props.model.artists);
			setPlaylist(props.model.playlists);
			setAlbum(props.model.albums);
		}
		props.model.addObserver(obs);

		return () => {
			props.model.removeObserver(obs);
		};
	}, [props.model]);

	return (
		<SidebarView
			artists={artists}
			playlists={playlist}
			albums={album}
			setSearch={(item) => props.model.setCurrentClick(item)}
			loginStatus={props.model.isLoggedIn}
		/>
	);
}

/*
    <SidebarView artists={props.artists} playlists={props.playlists} albums={props.albums} />
 */
