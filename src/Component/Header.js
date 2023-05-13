import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import bandera from "../assets/img/bandera.png";
import {Link} from "react-router-dom";




class Header extends Component {

    constructor() {
        super()
        this.state = {
            showModal: false
        }

    }
    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }


    cambia = () => {

        const menu = document.getElementById("nav");
        const cerrar = document.getElementById("hamburguesa");
        const navItem = document.getElementsByClassName("nav_item");
 
        menu.classList.toggle("open");
        cerrar.classList.toggle("close");
        navItem.classList.remove("open");

       


    }


    render() {
        return (
            <div className="fondo_header">
                <div className="container">

                
                <Link to="/hogar"> <img src={logo} alt="logo" /></Link>
                 
                    <div className="registrer">
                        <p className="tel mt-2"><img src={bandera} alt="bandera" />  +95 314 829 6147</p>

                        {/*onClick={() => this.handleModal()}*/}
                       <button className="entrar" ><Link to="https://wisphub.net/">Ingresar</Link></button>
                    </div>


                    <Modal show={this.state.showModal}>
                        <div className="contenedor_modal " >
 


                            <button onClick={() => this.handleModal()} className="boton_cerrar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </button>

                        </div>

                    </Modal>

                    <div onClick={this.cambia} className="menu">
                        <div id="hamburguesa" className="hamburguesa" >
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