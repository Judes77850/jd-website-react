import { NavLink } from "react-router-dom";

function ParcoursMini(){
    return(
        <div className="ParcoursMini">
            <h2>Formation et experience professionnel</h2>
            <p>Aprés plusiseurs années dans le commerce automobile, j'ai entrepris un changement de carriere.
                D'un naturel curieux et attiré par les domaines du numerique, le developpement WEB etait pour moi une evidence.
            </p>
            <div className="toParcours">
                <NavLink to="/Parcours" className="parcoursLink"><button>Parcours</button></NavLink>
            </div>
        </div>
    )
}

export default ParcoursMini