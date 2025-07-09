import React from "react";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Link } from "react-router";

function Header() {
  const navOptions = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "About", path: "/about" },
    { id: 2, name: "Contact", path: "/contact" },
    { id: 3, name: "SignUp", path: "/signup" },
  ];
  return (
    <div className="h-20 w-full bg-gray-700 flex items-center justify-between">
      <div>
        <span className="h-[50%] aspect-square">
          <LogoDevIcon />
        </span>
        <p className="text-white text-lg">K</p>
      </div>
      <div className="flex justify-between items-center">
        {navOptions.map((nav, index) => (
          <div key={nav.id} className="text-white font-normal text-md">
            <Link to={nav.path}>{nav.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
