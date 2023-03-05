import React, { Component } from "react";
import { Link } from "react-router-dom";



class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="footer_container container">
                    <section className="footer_text">
                        <h6>CONOCENOS</h6>
                        <p>Quines Somos</p>
                        <p>Lo que hacemos</p>
                    </section>
                    <section className="footer_text">
                    <h6>SERVICIOS</h6>
                     <Link to ="/hogar" ><p>Hogar</p></Link>
                     <Link to ="/empresas" > <p>Empresas</p></Link>
                     <Link to ="/empresas" > <p>Soporte Técnico</p></Link>
                        
                    </section>
                    <section className="footer_text">
                    <h6>CONTÁCTENOS</h6>
                        <p>e-mail: ventas@internext.com.co</p>
                        <p>Teléfono: +57 300 9122259</p>
                        <p>Horario: Lun-Vie 9:00AM - 5:00PM</p>
                        <p>Calle 14 # 16 131</p>
                        <p>Barranquilla, Atlántico</p>
                    </section>
                    <section className="footer_text">
                    <h6>SIGUENOS EN:</h6>
                    <div className="icon_redes">

                    <Link to = "https://es-la.facebook.com/" target="_blank">  
                      <img src="../assets/facebook.png" alt="logo_facebook"/> </Link>

                      <Link to = "https://www.instagram.com/internext.atl/?hl=es" target="_blank">  
                      <img src="../assets/instagram.png" alt="logo_instagram"/> </Link>


                        <Link to = "https://wa.me/message/4INN45KYOEVQE1?src=qr" target="_blank">
                        <img src="../assets/whatsapp.png" alt="logo_whatsapp"/></Link>
                    
                    </div>
                    </section>

            </div>

            <div className="container m-auto t-center">
            <h6>Reservados Todos los derechos - Internext 2023</h6>
            </div>

           </div>
        );
    }
}

export default Footer;  