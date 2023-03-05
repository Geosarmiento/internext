import React, { Component } from "react";



class Noticias extends Component{
    render(){
        return(
            <div className="noticias_container">

                <section className="noticias">
                    <p>Escribe tu e-mail y recibe nuestras últimas noticias</p>
                    <input className="input" type={Text} placeholder="escribe tu e-mail"></input>


                </section>
           
         

           

                     
            </div>     
        );
    }
}

export default Noticias