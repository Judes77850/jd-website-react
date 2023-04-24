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
                    <i className="fa-solid fa-laptop" key={device}></i>
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
                    <p>{projet.description}</p>
                    <img className={projet.laptopVue ? "laptopVue" : "notLink"} src={projet.laptopVue} title="visuel du site" alt="visuel du site"></img>
                    <div className="infoBox">
                        <img className={projet.demoLink ? "demoLink" : "notLink"} src={projet.demoLink} title="visuel du site" alt="visuel du site"></img>
                        <div className={projet.demoLink ? "moreInfosFull" : "moreInfos"}>
                            <div className="tagsBox">
                                <h4>Technos</h4>
                                <div className="technos">
                                    {CoolTagsCreate()}
                                </div>
                            </div>
                            <div className="DeviceBox">
                                <h4>Formats</h4>
                                <div className="devices">
                                    {CoolDeviceCreate()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="linkBox">
                        <button className="gitLink"><a href={projet.gitHubLink} ><i className="fa-brands fa-github"></i></a></button>
                        <button className={projet.functionalLink ? "link" : "notLink"}><a href={projet.functionalLink} >Voir le site</a></button>
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

