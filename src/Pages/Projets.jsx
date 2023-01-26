import Data from "../data.json"
import { Link } from 'react-router-dom'

function Projet(){
    return(
        Data.map((projet)=>(
                <div className="contenu" key={projet.id}>
                    <Link to={`../Projet/` + projet.title} key={projet.id} title="En savoir plus">
                        <div className={"lastprod lastprod" + projet.id} id="lastProd1">
                            <div className="logobox">
                                <img src={projet.logo} alt={projet.title} title={projet.title}></img>
                            </div>
                            <div className="textpart">
                                <p>{projet.underTitle}</p>
                            </div>
                        </div>
                    </Link>
                </div>
        ))
    )
}

function Projets(){
    return(
        <div className="content">
            <div className="ForGradient">
                <div className="lastProdBox">
                    <div className="titlePart">
                        <h2>Réalisations</h2>
                    </div>
                    {Projet()}
                </div>
            </div>
        </div>
    )
}

export default Projets