import React, { Component } from "react";

import 'animate.css';

import CardPlanes from "../Component/CardPlanes"
import BannerDedicado from "../Component/BannerDedicado";
import Footer from "../Component/Footer";
import Noticias from "../Component/Noticias";
import nave from "../Styles/img/nave.png";
import dedicado from "../Styles/img/dedicado.png";
import ultavelocidad from "../Styles/img/ultravelocidad.png";



class Hogar extends Component {
    render() {
        return (
            <div className="hogar">

                <div className="hogar_slider">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner alto" >
                            
                            
                            <div class="carousel-item active">

                            <div className="banners uno">
                                <div>
                                     <h2 className="animate__animated  animate__backInUp">ADQUIERE YA!</h2>
                                     <h1 className="animate__animated animate__fadeInLeft">PLAN HOGAR</h1> 
                                     <h2 className="animate__animated  animate__backInUp">INTERNET FIBRA OPTICA 100% ILIMITADO!</h2>
                                     
                                     
                                </div>
                                <img  src={nave}  alt="banner3" className="animate__animated  animate__bounceInUp"/>
                            </div>
                            </div>

                            <div class="carousel-item">
                                <div className="banners  dos">

                                <img  src={ultavelocidad}  alt="banner3" className="img2 animate__animated  animate__bounceInUp"/>
                                        
                                </div>
                            
                            </div>


                            <div class="carousel-item">
                                <div className="banners tres">

                                    <div className="text_tres">
                                        <h1 className="animate__animated  animate__backInUp">INTERNET DEDICADO</h1> 
                                        <h2 className="animate__animated  animate__backInUp">AL MEJOR COSTO VENEFICIO</h2> 
                                    </div>

                                    <div className="img_tres">
                                        <img src={dedicado} alt="imgen dedicado"></img>

                                    </div>


                                </div>
                            </div>


                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                   

                </div>

                <div className="hogar_text">
                    <h1>PLANES ILIMITADOS</h1>
                    <h3>Todos nuestros planes serán instalados utilizando
                        Fibra Optica de alta velocidad</h3>
                </div>

                <section className="container_hogar container">

                    <CardPlanes 
                            plan="PLAN HOGAR"
                            tipo=""
                            megas="25"
                            descripcion=""
                            valor="$45.000/mes" />

                     <CardPlanes 
                            plan="PLAN HOGAR"
                            tipo="+"
                            megas="50"
                            descripcion=""
                            valor="$95.000/mes" />

                      <CardPlanes 
                            plan="PLAN HOGAR"
                            tipo="PLUS"
                            megas="100"
                            descripcion=""
                            valor="$120.000/mes" />

                     <CardPlanes 
                            plan="PLAN HOGAR"
                            tipo="ULTRA"
                            megas="200"
                            descripcion=""
                            valor="$165.000/mes" />
                            

                            

                            
                    

                </section>

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

export default Hogar