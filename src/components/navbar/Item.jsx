import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Header = ({ logo, menuItem }) => {
    return (
        <header className="header">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamb" htmlFor ="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <Link to={'/item'}>
                    <li><a href="#">About</a></li>
                    </Link>
                   
                    <Link to={'/category'}>
                    <li><a href="#">Categories</a></li>
                    </Link>
                   
                </ul>
            </nav>
        </header>
    )
}

export default Header;