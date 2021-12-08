import SidebarView from "../views/SidebarView.js";
import setCurrentItem from "../SpotifyModel.js"

export default function SidebarPresenter(props) {
	return (
		<SidebarView
			artists={["Daft Punk", "The Beatles", "The Rolling Stones", "The Who"]}
			playlists={["My Playlist", "My Playlist 2"]}
			albums={["My Album", "My Album 2"]}		
			currentItem={props.model.currentItem}	
			artistChoice={artists => {props.model.setCurrentItem(artists); console.log(props.model)}}
		/>
	);
}

/*
    <SidebarView artists={props.artists} playlists={props.playlists} albums={props.albums} />
 */
