import React from "react";
import "../styles/Banners.css";

const Banners = ({ imgSrc, title, text, text2, button, className, classNametext}) => {
    return (
        <div className={`banner ${className}`}>
        <img className="banner__img" src={imgSrc} alt={title}/>
        <div className= {`banner__description ${classNametext}`}>
            <p className="banner__description_title">{title}</p>
            <p className="banner__description_text2">{text}</p>
            <p className="banner__description_text">{text2}</p>
            <button className="banner__button">{button}</button>
        </div>
    </div>
    )
}

export default Banners;