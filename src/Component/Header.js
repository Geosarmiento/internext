import React, { Component } from "react";






class Header extends Component {
    render() {
        return (
            <div className="fondo_header">
                <div className="container">
                    <img src="../assets/logo.png" alt="logo" />

                    
                  <div className="registrer">
                        <p className="tel mt-2"><img src="../assets/bandera.png" alt="bandera" />  +95 3043616333</p>
                       
                        <button>Entrar</button>
                
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