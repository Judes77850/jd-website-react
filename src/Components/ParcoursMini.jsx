import { NavLink } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import myImage from '../img/jd.webp';

function ParcoursMini(){
    const { ref, inView } = useInView({
    threshold: 0,
    });
    return(
        <div ref={ref} className="ParcoursMini">
            <div className={`PixPart${inView}`}>
                <img src={myImage} title="Julien Desaindes" alt="Julien Desaindes"></img>
            </div>
            <div className={`parcoursMiniBox${inView}`}>
                <h2>À propos de moi</h2>
                <div className="aproposTextPart">
                    <p>Après plusieurs années dans le commerce automobile, j'ai entrepris un changement de carrière.</p>
                    <p>D'un naturel curieux et attiré par les domaines du numérique, le développement WEB était pour moi une évidence.</p>
                    <p>Après une première formation, je souhaite à présent poursuivre cette expérience et approfondir mes connaissances de REACT en contrat d'alternance au sein du même organisme. Je suis donc à la recherche d'une entreprise d'accueil.</p>
                    <div className="toParcours">
                        <a href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react"alt="site web openclassrooms" target="_blank" rel="noopener noreferrer">En savoir plus</a>
                        <NavLink to="/Parcours" className="parcoursLink">Voir mon parcours</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParcoursMini