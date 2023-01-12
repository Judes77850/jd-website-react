import "../style/main.css"
import kanap from "../img/real/kanap.png"
import kasa from "../img/real/kasa.png"
import bookie from "../img/real/bookiblanc.png"
import ohmyfood from "../img/real/ohmyfood.png"
import lapanthere from "../img/real/panthere.png"
import piiquante from "../img/real/piiquante.png"


function LastReal(){
    return(
    <div className="presentation">
      <div className="lastReal">
        <div className="contentPart">
          <div className="titlePart">
            <h2>Les dernieres realisations</h2>
          </div>
          <div className="lastprodMini">
            <img src={kasa} alt="logo de l'entreprise Kasa"></img>
          </div>
          <div className="lastprodMini">
            <div className="logobox">
              <img src={piiquante} alt="logo de l'entreprise Piiquante"></img>
            </div>
          </div>
          <div className="lastprodMini">
            <div className="logobox">
              <img src={kanap} alt="logo de l'entreprise Kanap"></img>
            </div>
          </div>
          <div className="lastprodMini">
            <div className="logobox">
              <img src={lapanthere} alt="logo de l'entreprise la Panthere"></img>
            </div>
          </div>
          <div className="lastprodMini">
            <div className="logobox">
              <img src={ohmyfood} alt="logo de l'entreprise ohmyfood"></img>
            </div>
          </div>
          <div className="lastprodMini">
            <div className="logobox">
              <img src={bookie} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

  }

export default LastReal