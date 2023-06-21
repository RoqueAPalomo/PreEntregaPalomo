import React from "react";
import "./style.css";

const Header = ({ logo, menuItem }) => {
    return (
        <header className="header">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="menu" id="menu"/>
            <label className="icono" htmlFor = "menu">
                <span className="icono-line"></span>
            </label>
            <img  className="carrito" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="carrito" />
            <nav className="nav">
                <ul className="menu_items">
                    <li><a href="">Productos</a></li>
                    <li><a href="">Categorias</a></li>
                    <li><a href="">Sobre Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                   
                </ul>
            </nav>
        </header>

    )
}

export default Header;