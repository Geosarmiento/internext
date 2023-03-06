import React, { Component } from "react";
import logo from "../assets/img/logo.svg"
import bandera from "../assets/img/bandera.png"



   const menu = document.getElementById("menu");


class Header extends Component {

    cambia = () => {

        menu.classList.toggle("close");
        console.log(menu);
      }
  
    
    render() {
        return (
            <div className="fondo_header">
                <div className="container">
                    <img src={logo} alt="logo" />

                    
                  <div className="registrer">
                        <p className="tel mt-2"><img src={bandera} alt="bandera" />  +95 3043616333</p>
                       
                        <button>Pagar</button>
                
                        </div>    

                    <div onClick={this.cambia} className="menu">
                        <div id="hamburguesa"  className="hamburguesa" >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                

                </div>
            </div>
        );
    }
}

export default Header;  