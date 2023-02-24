import { NavLink } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import myImage from '../img/jd.webp';

function ParcoursMini(){
    const { ref, inView } = useInView({
    threshold: 0,
    });
    return(
        <div ref={ref} className="ParcoursMini">
            <div className="ContentParcoursMini">
                <div className={`PixPart${inView}`}>
                    <img src={myImage} title="Julien Desaindes" alt="Julien Desaindes"></img>
                </div>
                <div className={`parcoursMiniBox${inView}`}>
                    <h2>À propos de moi</h2>
                    <div className="aproposTextPart">
                        <p>Après plusieurs années dans le commerce automobile, j'ai entrepris un changement de carrière.</p>
                        <p>D'un naturel curieux et attiré par les domaines du numérique, le développement WEB était pour moi une évidence.</p>
                        <p>Après une formation "Développeur Web" chez OpenClassrooms, je souhaite à présent approfondir mes connaissances en contrat d'alternance.</p>
                        <p>Accépté chez Openclassrooms pour une formation de 24 mois ou a l'Iscod pour 12 mois, je suis donc à la recherche d'une entreprise d'accueil.</p>
                        <div className="toParcours">
                            <button><a href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react"alt="site web OpenClassrooms" target="_blank" rel="noopener noreferrer">Mon projet OpenClassrooms</a></button>
                            <button><a href="https://www.iscod.fr/formation-concepteur-developpeur-applications-en-alternance"alt="site web Iscod" target="_blank" rel="noopener noreferrer">Mon projet Iscod</a></button>
                            <button><NavLink to="/Parcours" className="parcoursLink">Voir mon parcours</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParcoursMini