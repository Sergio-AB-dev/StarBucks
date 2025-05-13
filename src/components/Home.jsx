
import "../styles/Main.css"
import Banners from './Banners'
import Banner1 from "../../src/assets/2024-10-Banner_frappulla_3.jpg"
import Banner2 from "../../src/assets/2024-05-BANNERS_COLOMBIA_NARIÑO.png"
import Banner3 from "../../src/assets/2024-05-BANNER_HAGAMOS_EL_CAMBIO.png"
import "./Cards"
import Cards from './Cards'
import DuoClasico from "../../src/assets/2024-09-AF_BANNER_COLSULTIVA_CLASICO_0.jpg"
import DuoPremium from "../../src/assets/2024-09-AF_BANNER_COLSULTIVA_PREMIUM_2_0.jpg"
import Actividades from "../../src/assets/2024-05-BANNERS_TERMINOS_CONDICIONES_2.png"
import Historias from "../../src/assets/2024-07-AF_BANNER_NUESTRAS_HISTORIAS.jpg"



function Home() {

  return (
    <>
      <div className="main">
        <Banners imgSrc={Banner1} title= "TERRORIFICAMENTE DELICIOSO" text="FRAPPULA FRAPPUCCINO®" text2="No te quedes sin probarlo" className="banner__dracula"/>
        <div className='main__cards'>
          <Cards imgSrc={DuoClasico} text="DÚO CLÁSICO" />
          <Cards imgSrc={DuoPremium} text="DÚO PREMIUM" />
        </div>
        <Banners imgSrc={Banner2} title= "Viaja por Colombia" className="banner__nariño" button="Conoce mas"/>
        <Banners imgSrc={Banner3} title= "Trae tu reutilizable" text2="¡Obtén un 15% de descuento en tu bebida favorita!" className="banner__envases"/>
        <div className='main__cards'>
          <Cards imgSrc={Actividades} text="Nuestras actividades" />
          <Cards imgSrc={Historias} text="Nuestras historias" />
        </div>
      </div>
    </>
  )
}

export default Home
