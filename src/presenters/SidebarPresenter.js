import SidebarView from "../views/SidebarView.js";
import setSearch from ".."

export default function SidebarPresenter(props) {
	return (
		<SidebarView
			artists={["Drake", "The Beatles", "Kanye West", "Dree Low"]}
			playlists={["My Playlist", "My Playlist 2"]}
			albums={["My Album", "My Album 2"]}
			artistId={["3TVXtAsR1Inumwj472S9r4", "3WrFJ7ztbogyGnTHbHJFl2", 
						"5K4W6rqBFWDnAN6FQUkS6x", "3tNPDodRNuLdezJnTsYOqy"]}
			setSearch={(item) => props.model.setCurrentClick(item)}
		/>
	);
}

/*
    <SidebarView artists={props.artists} playlists={props.playlists} albums={props.albums} />
 */
