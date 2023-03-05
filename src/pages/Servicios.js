import React, { Component } from "react";
import BannerDedicado from "../Component/BannerDedicado";
import Footer from "../Component/Footer";
import Noticias from "../Component/Noticias";

class Servicios extends Component{
    render(){
        return(
            <div>
           este es la pagina de servicios
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