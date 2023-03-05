import React, { Component } from "react";
import Button2 from "./Button2";
import dedicado from "../assets/img/iconodedicado.png"


class CardPlanes extends Component{
    render(){
        return(
            
            <div className="BannerDedicado_container ">
                <div className="fondostar">

                <div className="container">

                         <section className="banner_text">

                                <h2>AQUIERE TU PLAN AHORA</h2>
                               
                                <h5>con la cantidad de Megas que requieras</h5>
                                <br/>

                               <Button2/>

                        </section>

                        <section className="benner_icono">

                            <img src={dedicado} alt="icono dedicado"/>
                            <br/>
                            <br></br>
                            <h2 className="text2">INTERNET DEDICADO</h2>
                            <h5>AL MEJOR COSTO BENEFICIO</h5>

                        </section>

               </div>  

                       
            
               </div> 
            </div>
        );
    }
}

export default CardPlanes