import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.png";

export default function Navbar() {
  return (
    <div className="">
      <div>
        <img src={logo} className="w-10" />
        <h1>Storydex</h1>
      </div>
      <div>
        <NavLink to="/home"> Home</NavLink>
        <NavLink to="/library"> Library</NavLink>
      </div>
    </div>
  );
}
