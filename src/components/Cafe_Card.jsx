import React from "react";
import "../styles/Cafe_Card.css";

const Cafe_Card = ({ImgSrc, text, title}) => {
    return (
        <div className="cafe__card">
            <img className="cafe__card__image" src={ImgSrc} alt="instruccion" />
            <p className="cafe__card__title">{title}</p>
            <p className="cafe__card__text">{text}</p>
        </div>
    )
}

export default Cafe_Card;