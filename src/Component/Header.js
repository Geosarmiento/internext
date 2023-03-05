import React, { Component } from "react";
import logo from "../assets/img/logo.svg"
import bandera from "../assets/img/bandera.png"






class Header extends Component {
    render() {
        return (
            <div className="fondo_header">
                <div className="container">
                    <img src={logo} alt="logo" />

                    
                  <div className="registrer">
                        <p className="tel mt-2"><img src={bandera} alt="bandera" />  +95 3043616333</p>
                       
                        <button>Pagar</button>
                
                        </div>    

                    <div className="menu">
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