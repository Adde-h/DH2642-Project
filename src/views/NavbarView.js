import Login from "../components/Login";
import SearchFormView from "./SearchView";

export default function NavbarView(props) {
	
	return (
		<div className="navbarcontent">
				<SearchFormView  options={["tracks", "artists", "albums"]} model={props}/>
			<div className="profile">
				<Login />
			</div>
		</div>
	);
}

//			<input type="text" placeholder="Search.." />
