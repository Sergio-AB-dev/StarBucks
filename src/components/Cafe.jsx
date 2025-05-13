import React from "react";
import "../styles/Cafe.css";
import Card_cafe from "../components/Cafe_Card";
import Banner_cafe from "../assets/Banner_Cafe.jpeg.webp"
import Step1 from "../assets/Cafe-St1.jpeg.webp"
import Step2 from "../assets/Cafe_St2.jpeg.webp"
import Step3 from "../assets/Cafe_St3.jpeg.webp"
import Step4 from "../assets/Cafe_St4.jpeg.webp"
import Step5 from "../assets/Cafe_St5.jpeg.webp"
import Step6 from "../assets/Cafe_St6.jpeg.webp"
import Step7 from "../assets/Cafe-St7.jpeg.webp"


const Cafe = () => {
    return (
        <>
        <div className="cafe">
            <div className="cafe__slider">
            </div>
            <div className="cafe__steps">
                <div className="cafe__steps__banner">
                    <p className="cafe__steps__banner__title">Tu café Starbucks en prensa francesa</p>
                    <img className="cafe__steps__banner__img" src={Banner_cafe} alt="prepar cafe" />
                    <p className="cafe__steps__banner__sub-tile">¿Qué necesitamos?</p>
                    <ul className="cafe__steps__banner__list">
                        <li className="cafe__steps__banner__list-item">- Tu CAFÉ STARBUCKS COLOMBIA NARIÑO</li>
                        <li className="cafe__steps__banner__list-item">- Prensa Francesa</li>
                        <li className="cafe__steps__banner__list-item">- Cuchara</li>
                        <li className="cafe__steps__banner__list-item">- Tu taza favorita</li>
                        <li className="cafe__steps__banner__list-item">- Agua</li>
                    </ul>
                    <p className="cafe__steps__banner_text">Prepara tu prensa de café y no olvides precalentar la prensa de café enjuagándola con agua caliente. No olvides desechar el agua antes de agregar los pasos.</p>
                </div>
                <div className="cafe__steps__cards">
                    <Card_cafe ImgSrc={Step1} title="Paso 1:" text="Agrega el café molido grueso. Usa 2 cucharadas (10 g) de café molido por cada taza (180 ml) de agua caliente. Agrega el café molido a la prensa de café vacía. Para este método de preparación, puedes usar tu café molido favorito en tamaño 15 para producir un rico sabor sin amargura."/> 
                    <Card_cafe ImgSrc={Step2} title="Paso 2:" text="Vierte agua justo debajo del borde de la prensa. Para obtener la mejor preparación, agrega agua que esté 30 segundos después de que haya hervido. La temperatura del agua afecta la eficiencia con la que se extraen los sabores del café. La temperatura ideal para preparar café con una prensa debe estar entre 90 y 96 °C."/>  
                    <Card_cafe ImgSrc={Step3} title="Paso 3:" text="Revuelve suavemente los granos varias veces con una cuchara. Una o dos veces es suficiente."/>  
                    <Card_cafe ImgSrc={Step4} title="Paso 4:" text="Agrega el café molido grueso. Usa 2 cucharadas (10 g) de café molido por cada taza (180 ml) de agua caliente. Agrega el café molido a la prensa de café vacía. Para este método de preparación, puedes usar tu café molido favorito en tamaño 15 para producir un rico sabor sin amargura."/> 
                    <Card_cafe ImgSrc={Step5} title="Paso 5:" text="Espera 4 minutos para que se libere el café."/>  
                    <Card_cafe ImgSrc={Step6} title="Paso 5:" text="Empuja firmemente el émbolo hacia abajo, separando así el café de la superficie, presionando lentamente el émbolo hacia abajo."/> 
                    <Card_cafe ImgSrc={Step7} title="Paso 5:" text="Sirve y saborea tu café favorito en casa ¡Siente el aroma y disfruta de tu taza de café Colombia Nariño recién hecho como si estuvieras en una de nuestras tiendas!"/> 
                </div>
            </div>
        </div>
        </>
    )
}

export default Cafe;