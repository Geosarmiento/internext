import { Route, Routes } from "react-router-dom";


import Hogar from "./pages/Hogar";
import Empresas from "./pages/Empresas";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Error404 from "./pages/Error404";
import Header from "./Component/Header";
import Layout from "./pages/Layout";


function App(){
  return(
  
<div>
      <div>
        <Header/>
      </div>   

      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Hogar/>} />
          <Route path="hogar" element={<Hogar/>} />
          <Route path="empresas" element={<Empresas/>} />
          <Route path="servicios" element={<Servicios/>} />
          <Route path="contacto" element={<Contacto/>} />
          <Route path="*" element={<Error404/>} />
        </Route>
      </Routes>

</div>





  );
}


export default App;