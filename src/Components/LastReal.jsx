import "../style/main.css"
import Data from "../data.json"
import { Link } from 'react-router-dom'


function LastRealCreate(){
  return(
    Data.map((projet)=>(
          <div className="lastprodMini" key={projet.id}>
            <Link to={`../Projet/` + projet.title} key={projet.id}>
                  <img src={projet.logo} alt="logo du site"></img>
            </Link>
          </div>
    ))
  )
}

function LastReal(){
  return(
    <div className="presentation">
      <div className="ContentLastReal">
        <div className="titlePart">
          <h2>Les dernières réalisations</h2>
          <button><Link to="/Projets" className="parcoursLink">Voir les projets</Link></button>
        </div>
        <div className="lastReal">
          <div className="contentPart">
            {LastRealCreate()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastReal