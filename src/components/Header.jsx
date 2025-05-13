import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/starbucks.png";
import map from "../assets/mapa.png"
import menu from "../assets/menu.png";
import React, { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className="header">
        <nav className="navbar">
            <a href=""><img className="header__logo" src ={logo} alt="Logo de starbucks"/></a>
            <ul class="header__lista">
                <li><Link className="header__lista__enlace" to="/">HOME</Link></li>
                <li><Link className="header__lista__enlace" to="Cafe">CAFÉ</Link></li>
                <li><a  className="header__lista__enlace"href="">NOVEDADES</a></li>
            </ul>
            <button className="header__button"><img class="header__button__image" src={map} alt="Ubicacion"/>Localizar Tienda</button>
            <button className="menu" onClick={toggleMenu}><img className="menu_icon" src={menu} alt="menu"/></button>
        </nav>
        {menuOpen && (
                <div className="mobile-menu">
                    <ul className="mobile-menu__lista">
                        <li><Link className="header__lista__enlace" to="/" onClick={toggleMenu}>HOME</Link></li>
                        <li><Link className="header__lista__enlace" to="Cafe" onClick={toggleMenu}>CAFÉ</Link></li>
                        <li><a className="header__lista__enlace" href="#" onClick={toggleMenu}>NOVEDADES</a></li>
                    </ul>
                </div>
            )}
    </header>
    )
}

export default Header;