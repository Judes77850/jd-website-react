import Data from "../data.json"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function CoolTagsCreate(){
    const {id} = useParams()
    const projet = Data.find(projet => projet.title === id)
    const tags = projet.tags
    return(
        tags.map((tag) => {
            return(
                <img key={tag} src={`https://judes77850.github.io/hebergement/real/${tag}.webp`} alt={tag}></img>
                )
                
            }))
        }

function ProjetInfo(){
    const {id} = useParams()
    const projet = Data.find(projet => projet.title === id)
    return(
        <div className="projetContent" key={projet.title}>
            <div className="backToProjet">
            <Link to={`../Projets/`}>
            <i className="fa-solid fa-arrow-left"></i>
            </Link>
            </div>
            <img src={projet.logo} alt="logo de l'entreprise"></img>
            <h3>{projet.underTitle}</h3>
            <p>{projet.description}</p>
            <div className="tagsBox">
                {CoolTagsCreate()}
            </div>
            <a href={projet.gitHubLink} className="gitLink">Voir sur Github</a>
        </div>
    )
}

export default ProjetInfo;

