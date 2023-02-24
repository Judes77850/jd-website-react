import logoOc from '../img/logoOc.webp';
import { useInView } from 'react-intersection-observer';

function Recommandation(){
    const { ref, inView } = useInView({
        threshold: 0,
        });
    return(
        <div ref={ref} className={`recoBox${inView}`}>
            <div className="reco">
            <blockquote>
                <h3>Lettre de recommandation pour Julien Desaindes</h3>
                <p>Mentor chez OpenClassrooms, j'ai eu l'occasion de compter parmi mes élèves Monsieur Julien Desaindes entre 2022 et 2023.</p>
                <p>Durant ces années, j'ai pu découvrir chez lui une personnalité rigoureuse, dynamique et talentueuse. 
                    Lors des divers projets sur lesquels nous avons collaboré, Julien a toujours fait preuve d'un réel enthousiasme et d'une implication sans faille.</p>
                <p>C'est donc un honneur pour moi que de vous conseiller d'ajouter Julien à votre équipe. Nul doute qu'il constituera un atout majeur au sein de votre entreprise.</p>
                <p>Je me tiens à votre disposition pour toute demande d'informations complémentaires à son sujet.</p>
                <p>Sincères salutations.</p>
                <div className='signature'>
                    <p>David Gaillard</p>
                    <p>Founder & Co-director</p>
                    <p>Samurai Web Experts</p>
                </div>
            </blockquote>
            <div className={`imgBox${inView}`}>
            <a href="https://openclassrooms.com"alt="site web openclassrooms" target="_blank" rel="noopener noreferrer"><img src={logoOc} title="site web Openclassrooms" alt="Logo de l'école Openclassrooms"></img></a>
            </div>
            </div>
        </div>
    )
}

export default Recommandation