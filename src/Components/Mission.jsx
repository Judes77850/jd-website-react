import { useInView } from 'react-intersection-observer';

function Mission(){
    const { ref, inView } = useInView({
        threshold: 0,
    });
    return(
        <div ref={ref} className="missionBox">
            <div className={`missionContent${inView}`}>
            <h3>Quelles missions me confier ?</h3>
            <ul>
                <li className="li1">Construire un site web responsive et dynamique s’adaptant à tout type d’écran grâce à l’intégration des éléments des maquettes graphiques (développement front-end avec HTML, CSS, JavaScript et React)</li>
                <li className="li2">Créer des API et des bases de données pour développer des sites complets et dynamiques et assurer le bon fonctionnement côté serveur (développement back-end avec NodeJS, Express et MongoDB). </li>
                <li className="li3">Optimiser les performances et réaliser la maintenance de sites web déjà existants pour permettre leur fonctionnement optimal et une bonne visibilité sur les moteurs de recherche (SEO).</li>
                <li className="li4">Gérer un projet web de A à Z : de la planification du projet à la présentation de la solution au client, en passant par la rédaction des spécifications techniques.</li>
            </ul>
            </div>
        </div>
    )
}

export default Mission