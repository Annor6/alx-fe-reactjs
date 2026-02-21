import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/profile/details">Profile Details</Link> |{" "}
      <Link to="/profile/settings">Profile Settings</Link> |{" "}
      <Link to="/blog/1">Blog 1</Link>
    </nav>
  );
}

export default Navbar;