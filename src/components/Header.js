import { LOGO_URL } from "../utils/Constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import userContext from "../utils/userContext";

const Header = () => {
  const [reactBtn, setReactBtn] = useState("Login");
  const togglebtn = () => {
    reactBtn === "Login" ? setReactBtn("Logout") : setReactBtn("Login");
  };
  const { loggedInUser } = useContext(userContext);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p4 m-4">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">Cart</li>
          <button className="px-2" onClick={togglebtn}>
            {reactBtn}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
