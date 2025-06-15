import { NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.png";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6">
      <div className="flex items-center space-x-3">
        <img src={logo} className="w-10" />
        <h1 className="font-ink text-xl">Storydex</h1>
      </div>
      <div className="font-poppins space-x-5 text-sm">
        <NavLink to="/home" className="[&.active]:font-bold">
          Home
        </NavLink>
        <NavLink to="/library" className="[&.active]:font-bold">
          Library
        </NavLink>
      </div>
    </div>
  );
}
