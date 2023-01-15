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
                    <h3>Cadre commercial Lexus 2021-2022</h3>
                    <p>Mission: Commercialiser et représenter la gamme Lexus via différents canaux physiques et virtuels, vente de produits périphériques et de solutions de financement. Prospection, découverte client, réalisation de projets.</p>
                </div>
                <div className="card">
                    <img src={volkswagen} alt="logo Volkswagen"></img>
                    <h3>Cadre commercial Volkswagen 2020-2021</h3>
                    <p>Mission: Commercialiser et représenter la gamme Volkswagen Utilitaires sur secteur sud IDF, vente de produits périphériques et de solutions de financement. Prospection, découverte client, réalisation de projets d’aménagement.</p>
                </div>
                <div className="card">
                    <img src={audi} alt="logo Audi"></img>
                    <h3>Responsable VO Audi 2018-2020</h3>
                    <p>Mission: Commercialiser et représenter la gamme Audi occasion plus via différents canaux physiques et virtuels, vente de produits périphériques et de solutions de financement. Gestion des approvisionnements en véhicules d’occasion, gestion d’un planning de passage en atelier et d’un centre d’exposition.</p>
                </div>
                <div className="card">
                    <img src={honda} alt="logo Honda"></img>
                    <h3>Responsable commercial Honda 2014-2018</h3>
                    <p>Mission: Commercialiser et représenter la gamme Honda automobile via différents canaux physiques et virtuels, vente de produits périphériques et de solutions de financement. Gestion des approvisionnements en véhicules neufs et d’occasion, gestion d’un planning de passage en atelier et d’un centre d’exposition. Mise en place d’un plan de communication local, gestion des réseaux sociaux, suivi des primes.</p>
                </div>
            </div>
            <div className="FormBox">
                <h2>Formation</h2>
                <div className="card">
                    <h3>Developpeur WEB 2022</h3>
                    <p>Formation de developpeur web chez Openclassrooms.</p>
                    <p>Technologies etudiées :HTML, CSS, JavaScript, React, Git/GitHub, NodeJS, Express, MongoDB, les API REST</p>
                    <p>Cette formation se compose de plusieurs projets profesionnalisants</p>
                    <a href="https://openclassrooms.com/fr/paths/717-developpeur-web"alt="site web openclassrooms">En savoir plus</a>
                </div>
                <div className="card">
                    <h3>BTS Management des unités commerciales 2012</h3>
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