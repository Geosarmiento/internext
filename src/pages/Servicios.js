import React, { Component } from "react";
import BannerDedicado from "../Component/BannerDedicado";
import Footer from "../Component/Footer";
import Noticias from "../Component/Noticias";
import iconreloj from "../assets/img/iconreloj.png";
import fotoinstalador from "../assets/img/fotoinstalador.png";

class Servicios extends Component {
    render() {
        return (
            <div>
                 < div className="fondo">
                <div className="container servicios">

                    <div className="text_empresas">
                        <h1>Tiempo de respuesta</h1>
                        <h3>Atención y soporte técnico inmediato  </h3>
                        <p>para garantizar que siempre cuentes con tu servicio de internet. </p>
                    </div>
                    <div className="img_servicios">
                        <img src={iconreloj} alt="empresaslogo" />
                    </div>




                </div>

                </div>

                <div className="fondo_icon soporte1">
                        <div className="container soporte">
                            <img src={fotoinstalador} alt="fotoinstalador"/> 
                            
                            <article>
                                 <h1>Contamos con personal altamente capacitado</h1>  
                                 <p>Listos para solucionar cualquier imprevisto lo más rápido posible.</p>              
                            </article>
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
            </div>

        );
    }
}

export default Servicios