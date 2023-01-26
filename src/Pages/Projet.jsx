import Data from "../data.json"
import { useParams, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function CoolTagsCreate(){
    const {id} = useParams()
    const projet = Data.find(projet => projet.title === id)
    const tags = projet.tags
    return(
        tags.map((tag) => {
            return(
                <img key={tag} src={`https://judes77850.github.io/hebergement/real/${tag}.webp`} alt={tag} title="technologie employée"></img>
                )
                
            }))
}

function CoolDeviceCreate(){
    const {id} = useParams()
    const projet = Data.find(projet => projet.title === id)
    const devices = projet.support
    return(
        devices.map((device) => {
            if (device === "mobile"){
                return(
                    <i className="fa-solid fa-mobile-screen" key={device}></i>
                    )
            }else if (device === "desktop"){
                return(
                    <i className="fa-solid fa-computer" key={device}></i>
                )
            }else{
                return(
                    ""
                )
            }
        }))
}

function ProjetInfo(){
    const {id} = useParams()
    const projet = Data.find(projet => projet.title === id)
    if (projet){
        return(
            <div className="projetContent" key={projet.title}>
                <div className="projetBox">
                    <div className="backToProjet">
                        <Link to={`../Projets/`}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                    </div>
                    <img src={projet.logo} alt="logo de l'entreprise"></img>
                    <h3>{projet.underTitle}</h3>
                    <div className="DeviceBox">
                        {CoolDeviceCreate()}
                    </div>
                    <p>{projet.description}</p>
                    <div className="tagsBox">
                        {CoolTagsCreate()}
                    </div>
                    <div className="linkBox">
                        <a href={projet.gitHubLink} className="gitLink"><i className="fa-brands fa-github"></i></a>
                        <a href={projet.functionalLink} className={projet.functionalLink ? "link" : "notLink"}>Voir le site</a>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <Navigate to="/error" />
        )
    }
}

export default ProjetInfo;

