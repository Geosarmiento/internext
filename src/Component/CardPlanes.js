import React, { Component } from "react";

import Button from "./Button";
import logotv from "../Styles/img/logotv.png";






class CardPlanes extends Component{
    render(){
        return(
            
            <div className="cardplanes_container">

                        <section className="plan">
                                <h6>{this.props.plan}</h6> <h6 className="tipo">{this.props.tipo}</h6>
                        </section>

                        <section className="plan_megas">
                            <h1>{this.props.megas}</h1>
                            <h4>MEGAS</h4>
                        </section>

                        <section className="plan_descripcion">

                            <div className="tvdigital">
                                
                                <img src={logotv} alt="logotv"/>
                                
                            </div>
                
                            <h6> Plan Ilimitado  </h6>
                            <h6> Fibra Optica  </h6>
                        </section>

                        <section className="plan_valor">
                               <p>{this.props.valor}</p> 
                        </section>
                <div>                  
                    <Button/>    
                    
                </div>          
            </div>
        );
    }
}

export default CardPlanes