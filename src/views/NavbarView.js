export default function NavbarView(props) {
  let isLoggedIn = false;

	return (
		<div class="navbarcontent">
			<input type="text" placeholder="Search.." />
      <div class="profile">
			  <a href="#">{isLoggedIn ? "Username" : "Login / Sign Up"}</a>
      </div>
		</div>
	);
}
