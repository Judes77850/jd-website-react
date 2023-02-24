import { Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error from './Pages/Error';
import LastReal from './Components/LastReal';
import Contact from "./Pages/Contact";
import Projets from "./Pages/Projets";
import Parcours from "./Pages/Parcours";
import Mission from './Components/Mission';
import ContactMini from './Components/ContactMini';
import ParcoursMini from "./Components/ParcoursMini";
import Projet from "./Pages/Projet";
import Recommandation from "./Components/Reco";


function App() {
  return (
    <div className='application'>
        <Header />
      <div className='main'>
        <Routes> 
            <Route path="" element={<><ParcoursMini/><Recommandation/><Mission/><LastReal/><ContactMini/></>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Parcours" element={<Parcours/>}/>
            <Route path="/Projets" element={<Projets/>}/>
            <Route path="/Projet/:id" element={<Projet/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
      </div>
        <Footer />
    </div>
  )
}

export default App;
