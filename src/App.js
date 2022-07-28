import logo from './logo.svg';
import './App.css';
import Promises from "./components/Promises";
import TitleLanding from "./components/TitleLanding";
import NavBar from "./components/NavBar";
import CatalogoMaps from "./components/CatalogoMaps";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar name={"menu"} />
   <Routes>
    <Route index path= "/" element={<>    
      <TitleLanding />  
      <CatalogoMaps />
      </>
    }/>
    <Route path= "/category/:id" element={<CatalogoMaps />}/>
    <Route path= "/detail" element={<ItemDetailContainer/>}/>


    <Route path="*"
    element={
      <div className="error"> 
      <p> ERROR 404 
      <a href="/"> <button> volver </button> </a>  
      </p>
      </div> 
    }
    />     
   </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
