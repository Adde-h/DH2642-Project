import SidebarView from "../views/SidebarView.js";

export default function SidebarPresenter(props) {
	return (
		<SidebarView
			artists={["4tZwfgrHOc3mvqYlEYSvVi", "3WrFJ7ztbogyGnTHbHJFl2", "22bE4uQ6baNwSHPVcDxLCe", "67ea9eGLXYMsO2eYQRui3w"]}
			playlists={["My Playlist", "My Playlist 2"]}
			albums={["My Album", "My Album 2"]}
		/>
	);
}

/*
    <SidebarView artists={props.artists} playlists={props.playlists} albums={props.albums} />
 */
