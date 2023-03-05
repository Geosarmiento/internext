import React, { Component } from "react";
import BannerDedicado from "../Component/BannerDedicado";
import Footer from "../Component/Footer";
import Noticias from "../Component/Noticias";


class Empresas extends Component {
    render() {
        return (
            <div>
                
               < div className="fondo">
                <div className="container servicios">
                        
                <div className="text_empresas">
                        <h1>Servicios Confiables</h1>
                         <h3>Nuestra conexión es 100% en fibra Optica </h3> 
                         <p>Nuestro soporte técnico es humano! No usamos Robots para atenderte </p>
                    
                               
               
                </div>
                <div className="img_servicios">
                    <img src="../assets/empresaslogo.png" alt="empresaslogo" />
                </div>


                </div>
                </div>

                
              



           <div>
                    <BannerDedicado />
                </div>
                <div>
                    <Noticias />
                </div>

                <div>
                    <Footer />
                </div>
           </div >
                
        );
    }
}

export default Empresas