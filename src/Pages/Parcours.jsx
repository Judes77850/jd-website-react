import lexus from "../img/real/lexus.webp";
import volkswagen from "../img/real/volkswagen.webp";
import audi from "../img/real/audi.webp";
import honda from "../img/real/honda.webp";

function Parcours(){
    return(
        <div className="Parcours">
            <div className="ParcoursBox">
            <h2>Expérience professionnelle</h2>
                <div className="card">
                    <img src={lexus} alt="logo Lexus"></img>
                    <h3>Cadre commercial</h3>
                    <p>2021-2022</p>
                    <p>Mission: Commercialiser et représenter la gamme Lexus via différents canaux physiques et virtuels, vente de produits périphériques et de solutions de financement. Prospection, découverte client, réalisation de projets.</p>
                </div>
                <div className="card">
                    <img src={volkswagen} alt="logo Volkswagen"></img>
                    <h3>Cadre commercial</h3>
                    <p>2020-2021</p>
                    <p>Mission: Commercialiser et représenter la gamme Volkswagen Utilitaires sur secteur sud IDF, vente de produits périphériques et de solutions de financement. Prospection, découverte client, réalisation de projets d’aménagement.</p>
                </div>
                <div className="card">
                    <img src={audi} alt="logo Audi"></img>
                    <h3>Responsable VO</h3>
                    <p>2018-2020</p>
                    <p>Mission: Commercialiser et représenter la gamme Audi occasion plus via différents canaux physiques et virtuels, vente de produits périphériques et de solutions de financement. Gestion des approvisionnements en véhicules d’occasion, gestion d’un planning de passage en atelier et d’un centre d’exposition.</p>
                </div>
                <div className="card">
                    <img src={honda} alt="logo Honda"></img>
                    <h3>Responsable commercial</h3>
                    <p>2014-2018</p>
                    <p>Mission: Commercialiser et représenter la gamme Honda automobile via différents canaux physiques et virtuels, vente de produits périphériques et de solutions de financement. Gestion des approvisionnements en véhicules neufs et d’occasion, gestion d’un planning de passage en atelier et d’un centre d’exposition. Mise en place d’un plan de communication local, gestion des réseaux sociaux, suivi des primes.</p>
                </div>
            </div>
            <div className="FormBox">
                <h2>Formation</h2>
                <div className="card">
                    <h3>Développeur d'application - PHP/Symfony en alternance</h3>
                    <ul>
                        <li>Analyser un cahier des charges et choisir une solution technique adaptée parmi les solutions existantes</li>
                        <li>Concevoir l’architecture technique d’une application à l’aide de diagrammes UML</li>
                        <li>Créer des projets web dynamiques grâce PHP</li>
                        <li>Communiquer avec une base de données pour stocker et requêter des informations</li>
                        <li>Développer de manière professionnelle grâce au framework Symfony</li>
                        <li>Mettre en oeuvre des tests unitaires et fonctionnels ainsi qu’utiliser les outils les plus connus d’intégration continue</li>
                        <li>Produire une documentation technique et fonctionnelle de l’application</li>
                        <li>Prendre en compte les problématiques de performance d’une application PHP</li>
                    </ul>
                    <a href="https://openclassrooms.com/fr/paths/500-developpeur-dapplication-php-symfony"alt="site web openclassrooms">En savoir plus</a>
                </div>
                <div className="card">
                    <h3>Développeur WEB</h3>
                    <ul>
                        <li>Construire un site web responsive et dynamique s’adaptant à tout type d’écran grâce à l’intégration des éléments des maquettes graphiques (développement front-end avec HTML, CSS, JavaScript et React)</li>
                        <li>Créer des API et des bases de données pour développer des sites complets et dynamiques et assurer le bon fonctionnement côté serveur (développement back-end avec NodeJS, Express et MongoDB). </li>
                        <li>Optimiser les performances et réaliser la maintenance de sites web déjà existants pour permettre leur fonctionnement optimal et une bonne visibilité sur les moteurs de recherche (SEO).</li>
                        <li>Gérer un projet web de A à Z : de la planification du projet à la présentation de la solution au client, en passant par la rédaction des spécifications techniques.</li>
                    </ul>
                    <a href="https://openclassrooms.com/fr/paths/717-developpeur-web"alt="site web openclassrooms">En savoir plus</a>
                </div>
                <div className="card">
                    <h3>BTS MUC</h3>
                    <p>Formation réalisée en alternance chez un concessionnaire automobile</p>
                </div>
                <div className="card">
                    <h3>Bac professionnel commerce</h3>
                    <p>Formation réalisée en alternance chez un concessionnaire automobile</p>
                </div>
            </div>

        </div>
    )
}

export default Parcours