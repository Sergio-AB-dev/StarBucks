import React from "react";
import "../styles/Cards.css";

const Cards = ({ imgSrc, text,}) => {
    return (
        <div className="card">
                <img className="card__img" src={imgSrc} alt="Menu clasico"/>
                <p className="card-title">{text}</p>
                <button className="card__button">Mas informacion</button>
            </div>
    )
}

export default Cards;