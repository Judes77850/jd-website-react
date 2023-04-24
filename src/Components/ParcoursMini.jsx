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
                        <p>Après une formation "Développeur Web" chez OpenClassrooms, j'ai choisi d'approfondir mes connaissances back-end et de suivre le parcours "Développeur d'application - PHP / Symfony" en contrat d'alternance.</p>
                        <div className="toParcours">
                            <button><a href="https://openclassrooms.com/fr/paths/500-developpeur-dapplication-php-symfony"alt="site web OpenClassrooms" target="_blank" rel="noopener noreferrer">Mon projet OpenClassrooms</a></button>
                            <button><NavLink to="/Parcours" className="parcoursLink">Voir mon parcours</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParcoursMini