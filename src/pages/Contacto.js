import React, { Component } from "react";
import BannerDedicado from "../Component/BannerDedicado";

import Footer from "../Component/Footer";
import Noticias from "../Component/Noticias";



class Contacto extends Component {
    render() {
        return (
            <div>
<div className="fondo">
                <div className="container contacto">

                    <form action="enviar.php" method="post">
                        <h2>Dejanos tus datos y en breve nos comunicaremos</h2>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nombre</label>

                            <input 
                                type="text" 
                                class="form-control" 
                                name="nombre"
                                id="exampleFormControlInput1"
                                placeholder="Pedro Perez"/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Teléfono</label>

                            <input 
                                type="numb" 
                                class="form-control" 
                                name="phone"
                                id="exampleFormControlInput1"
                                placeholder="304 52555225"/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Correo Eléctronico</label>

                            <input 
                                type="email" 
                                class="form-control" id="exampleFormControlInput1"
                                name="email"
                                placeholder="name@example.com"/>
                        </div>


                        
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Escribe aqui tus comentarios </label>

                            <textarea 
                            class="form-control" 
                            name="message"
                            id="exampleFormControlTextarea1" 
                            rows="3"></textarea>
                        </div>

                        
                        <button type="sumit">Enviar</button>
                  

                    </form>

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

export default Contacto