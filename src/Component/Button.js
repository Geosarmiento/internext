import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends Component{
    render(){
        return(
            
          
           <div className="buttomPrimario">
                <Link  to="/contacto">Contratar</Link>
           </div>
           
        );
    }
}

export default Button