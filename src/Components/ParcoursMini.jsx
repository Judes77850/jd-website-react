import { NavLink } from "react-router-dom";

function ParcoursMini(){
    return(
        <div className="ParcoursMini">
            <h2>Formation et expérience professionnelle</h2>
            <p>Aprés plusiseurs années dans le commerce automobile, j'ai entrepris un changement de carriere.</p>
            <p>D'un naturel curieux et attiré par les domaines du numerique, le developpement WEB etait pour moi une evidence.</p>
            <p>Après une premiere formation, je souhaite a présent poursuivre cette expérience et approfondir mes connaissances de REACT en contrat d'alternance au sein du même organisme. Je suis donc a la recherche d'une entreprise d'accueil.</p>
            <div className="toParcours">
                <a href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react"alt="site web openclassrooms" target="_blank" rel="noopener noreferrer">En savoir plus</a>
                <NavLink to="/Parcours" className="parcoursLink">Voir mon parcours</NavLink>
            </div>
        </div>
    )
}

export default ParcoursMini