import React from "react";
import "./style.css";
import CartWidget from './CartWidget';

const NavBar = ({ logo, menuItem }) => {
    return (
        <nav className="nav">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="menu" id="menu"/>
            <label className="icono" htmlFor = "menu">
                <span className="icono-line"></span>
            </label>
            <CartWidget />
        </nav>

    )
}

export default NavBar;