import { Link } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar flex flex-col">
      <div className="link-container">
        <Link to="/contacts" className="w-fit">
          <button className="navbut">Contacts</button>
        </Link>
      </div>
      <hr className="divider" />
      <div className="link-container">
        <Link to="/chartandmaps" className="w-fit">
          <button className="navbut">Charts & Maps</button>
        </Link>
      </div>
      <hr className="divider" />
      <div className="head">
          Sidebar
      </div>
    </nav>
  );
};

export default Navbar;
