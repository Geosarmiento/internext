import { Route, Routes, Link } from "react-router-dom";
import {AuthProvider} from "./context/authContext";

import "../src/Styles/styles.scss";

import Hogar from "./pages/Hogar";
import Empresas from "./pages/Empresas";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Error404 from "./pages/Error404";
import Header from "./Component/Header";
import Pagar from "./pages/Pagar";
import Layout from "./pages/Layout";




import flotante from "./Styles/img/WhatsApp.png"



function App(){
  
  return(
    <AuthProvider>
  
<div>
  <Link to="https://api.whatsapp.com/message/4INN45KYOEVQE1?autoload=1&app_absent=0" 
    target={"_blank"}><span className="flotante"><img src={flotante} alt="flotante" /> </span></Link>

      <div>
        <Header/>
      </div>   
      <Routes>
        <Route path="/" element={<Layout/>} >

              <Route index element={<Hogar/>

               
                    }/>

               
                <Route path="hogar" element={<Hogar/>} />
                <Route path="pagar" element={<Pagar/>} />
                <Route path="empresas" element={<Empresas/>} />
                <Route path="servicios" element={<Servicios/>} />
                <Route path="contacto" element={<Contacto/>} />
                <Route path="*" element={<Error404/>} />
        </Route>
      </Routes>



</div>
</AuthProvider>





  );
}


export default App;