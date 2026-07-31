import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/services">Services</Link> |{" "}
      <Link to="/properties">Properties</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/users">Users</Link>|{" "}
      <Link to="/Posts">Posts</Link>
    </nav>
  );
}

export default Navbar;