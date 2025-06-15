import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.png";

export default function Navbar() {
  return (
    <div>
      <div>
        <img src={logo} className="w-20" />
        <h1>Storydex</h1>
      </div>
      <div>
        <NavLink> Home</NavLink>
        <NavLink> Library</NavLink>
      </div>
    </div>
  );
}
