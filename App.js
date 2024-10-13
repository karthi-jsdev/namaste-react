/**
 * Header
 *  - Logo
 *  - navcomponent
 * Body
 *  - search
 *  - RestaurantCard
 *     - Img
 *      - Name of Res, Star Rating,cuisine,delievery time
 * Footer
 *  -copyright
 *  -Links
 *  -Address
 *  -Contact
 */

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li> 
                </ul>
            </div>
        </div>
    )
}
const RestaurantCard = () =>{
    return (
        <div className="res-card">
            <img className="res-logo" alt="img-logo" src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/veg-biryani-scaled.jpeg?v=1618288847" />
            <h3>Maghana Food</h3>
            <h4>Biriyani South Indian Asian</h4>
            <h4>34 mins</h4>
            <h4>4.4 Ratings</h4>
        </div>
    )
}
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-conatiner"><RestaurantCard /></div>
        </div>
    )
}

const AppLayout = () =>{
    return(<div>
        <Header/>
        <Body/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
