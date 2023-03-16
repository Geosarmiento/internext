import React, { Component } from "react";
import BannerDedicado from "../Component/BannerDedicado";
import Footer from "../Component/Footer";
import Noticias from "../Component/Noticias";
import empresaslogo from "../assets/img/empresaslogo.png";
import icondedicado from "../assets/img/icondedicado.png";
import iconhosting from "../assets/img/iconhosting.png";
import iconemail from "../assets/img/iconemail.png";
import iconservicios from "../assets/img/iconservicios.png";






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
                                    <img src={empresaslogo} alt="empresaslogo" />
                                </div>

                              


                            </div>
                            
                </div>

                

                <div className="fondo_icon">
                <div className="container icon_servicios">
                    <article>
                        <img src={icondedicado} alt="icondedicado" />
                        <h6>INTERNET DEDICADO</h6>
                        <p>Tu negocio requiere una conexion dedicada,
                            asi podras brindarle mejores soluciones a tus clientes</p>

                    </article>
                    <article>
                        <img src={iconhosting} alt="icondedicado" />
                        <h6>HOSTING</h6>
                        <p>Con nuestro servicio de hosting podrás almacenar tu pagina 
                            web en la nube completamente gratis y con almacenamiento SSD</p>

                    </article>
                    <article>
                        <img src={iconemail} alt="icondedicado" />
                        <h6>E-MAIL CORPORATIVO</h6>
                        <p>Nuestros planes empresariales incluyen email 
                            corporativo adjunto a tu domino.</p>

                    </article>
                    <article>
                        <img src={iconservicios} alt="icondedicado" />
                        <h6>SERVIVIOS 24/7</h6>
                        <p>Soporte 24 horas al día 7 dias a la semana, por que tu negocio merece lo mejor </p>

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
            </div >

        );
    }
}

export default Empresas