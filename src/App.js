import { Route, Routes} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import LastReal from './Components/LastReal';
import Contact from "./Pages/Contact";
import Projets from "./Pages/Projets";
import Parcours from "./Pages/Parcours";
import ParcoursMini from "./Components/ParcoursMini";
import Projet from "./Pages/Projet";


function App() {
  return (
    <div className='application'>
        <Header />
      <div className='main'>
        <Routes> 
            <Route path="/" element={<><LastReal/><ParcoursMini/></>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Parcours" element={<Parcours/>}/>
            <Route path="/Projets" element={<Projets/>}/>
            <Route path="/Projet/:id" element={<Projet/>}/>
          </Routes>
      </div>
        <Footer />
    </div>
  )
}

export default App;
