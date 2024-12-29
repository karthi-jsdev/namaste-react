import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [reactBtn, setReactBtn] = useState('Login');
  const togglebtn = (() => {
    reactBtn === 'Login' ? setReactBtn('Logout') : setReactBtn('Login')
  })
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button className='login' onClick={togglebtn}>{reactBtn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header