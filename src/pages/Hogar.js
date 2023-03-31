import React, { Component } from "react";
import {Link} from "react-router-dom";

import 'animate.css';

import CardPlanes from "../Component/CardPlanes"
import BannerDedicado from "../Component/BannerDedicado";
import Footer from "../Component/Footer";
import Noticias from "../Component/Noticias";
import nave from "../Styles/img/nave.png";
import dedicado from "../Styles/img/dedicado.png";
import ultavelocidad from "../Styles/img/ultravelocidad.png";
import { IoLogoUsd,IoReceiptOutline,IoReaderOutline } from "react-icons/io5";
import NuestrosClientes from "../Component/NuestrosClientes";




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
                                        <h2 className="animate__animated  animate__backInUp">AL MEJOR COSTO BENEFICIO</h2> 
                                    </div>

                                    <div className="img_tres">
                                        <img src={dedicado} alt="imgen dedicado" className="animate__animated  animate__bounceInUp"/>

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


                <div className="btn_pagar">
           
                <div className=" botones_home">
                        
                        <Link to="/pagar" className='btn_home'>
                            <IoLogoUsd/>
                            <p> Pagar Factura</p>
                        </Link>


                        <Link to='https://clientes.internext.com.co/solicitar-instalacion/internext/' className='btn_home'>
                            <IoReaderOutline/>
                            <p>Solicitar Instalación</p>
                        </Link>
                      
                        <Link to="/contacto" className='btn_home'>
                            <IoReceiptOutline/>
                            <p>PQR</p>      
                        </Link>

                           
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
                            valor="$75.000/mes" />

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
                            valor="$125.000/mes" />

                     <CardPlanes 
                            plan="PLAN HOGAR"
                            tipo="ULTRA"
                            megas="200"
                            descripcion=""
                            valor="$185.000/mes" />

                    <CardPlanes 
                            plan="PLAN HOGAR"
                            tipo="FULL"
                            megas="400"
                            descripcion=""
                            valor="$280.000/mes" />
                            

                            

                            
                    

                </section>

                <div>
                    <BannerDedicado />
                </div>
                    <div>
                        <NuestrosClientes/>
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