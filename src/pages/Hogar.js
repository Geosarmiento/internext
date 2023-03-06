import React, { Component } from "react";
import CardPlanes from "../Component/CardPlanes"
import BannerDedicado from "../Component/BannerDedicado";
import Footer from "../Component/Footer";
import Noticias from "../Component/Noticias";

import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.jpg";

class Hogar extends Component {
    render() {
        return (
            <div className="hogar">

                <div className="hogar_slider">

                    <div id="carouselExampleFade  " class="carousel slide carousel-fade" data-bs-ride="carousel">
                        
                        <div class="carousel-inner">
                           
                            <div class="carousel-item active ">
                                 <img src={banner1} class="d-block w-100 " alt="image1"/>
                            </div>

                            <div class="carousel-item">
                                <img src={banner2} class="d-block w-100" alt="image2"/>
                            </div>
                            <div class="carousel-item">
                                <img src={banner1} class="d-block w-100" alt="image3"/>
                            </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Anterior</span>
                        </button>

                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Siguiente</span>
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