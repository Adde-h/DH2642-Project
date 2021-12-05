import Login from "../components/Login";

export default function NavbarView(props) {

	return (
		<div className="navbarcontent">
			<input type="text" placeholder="Search.." />
			<div className="profile">
				<Login/>
			</div>
		</div>
	);
}
