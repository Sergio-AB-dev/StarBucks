import React from "react";
import logo from "../assets/starbucks.png";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__info">
            <div className="footer__info__logo-container">
            <img className="footer__info__logo" src={logo} alt="logo" />
            </div>
            <ul className="footer__info__lista">
                <li className="footer__info__lista__item-title">Sobre nosotros</li>
                <li className="footer__info__lista__item">Acerca de Starbucks</li>
                <li className="footer__info__lista__item">Trabaja con nosotros</li>
                <li className="footer__info__lista__item">Historias y noticias Starbucks</li>
                <li className="footer__info__lista__item">Sobre Notmilk</li>
                <li className="footer__info__lista__item">Guia de preparacion de un cafe en casa</li>
            </ul>
            <ul className="footer__info__lista">
                <li className="footer__info__lista__item-title">Atencion al Cliente</li>
                <li className="footer__info__lista__item">Sugerencias y reclamos</li>
                <li className="footer__info__lista__item">Factura electronico</li>
            </ul>
            </div>
            <div className="footer__info__redes">
                <p>Hecho por Sergio Mauricio Ardila Barbosa</p>
            </div>
        </div>

    )
}

export default Footer;