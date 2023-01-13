import Data from "../data.json"
import { Link } from 'react-router-dom'

function Projet(){
    return(
        Data.map((projet)=>(
                <div className="contenu" key={projet.id}>
                    <div className={"lastprod lastprod" + projet.id} id="lastProd1">
                        <div className="moreOpt">
                            <Link to={`../Projet/` + projet.title} key={projet.id}>
                                <i className="fa-solid fa-plus"></i>
                            </Link>
                                <a href={projet.gitHubLink} className="gitLink">Voir sur Github</a>
                        </div>
                        <div className="textpart">
                            <p>{projet.underTitle}</p>
                        </div>
                        <div className="logobox">
                            <img src={projet.logo} alt=" "></img>
                        </div>
                    </div>
                </div>
        ))
    )
}

function Projets(){
    return(
        <div className="content">
            <div className="lastProdBox">
            <div className="titlePart">
                <h2>Les projets de formation</h2>
            </div>
                {Projet()}
            </div>
        </div>
    )
}

export default Projets