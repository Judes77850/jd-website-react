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
      <div className="lastReal">
        <div className="contentPart">
          <div className="titlePart">
            <h2>Les dernières réalisations</h2>
          </div>
            {LastRealCreate()}
        </div>
    </div>
  </div>
  )
}

export default LastReal