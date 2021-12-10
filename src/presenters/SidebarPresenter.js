import SidebarView from "../views/SidebarView.js";

export default function SidebarPresenter(props) {
	return (
		<SidebarView
			artists={["Drake", "The Beatles", "Kanye West", "Dree Low"]}
			playlists={["My Playlist", "My Playlist 2"]}
			albums={["My Album", "My Album 2"]}
		/>
	);
}

/*
    <SidebarView artists={props.artists} playlists={props.playlists} albums={props.albums} />
 */
