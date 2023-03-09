import React, { Component } from "react";
import { Link } from "react-router-dom";





class Button extends Component{

   

    render(){
        return(
            
          
           <div className="buttomPrimario">
                <Link  to="/contacto" onClick="scroll(0, 100)">Contratar</Link>
           </div>
           
        );
    }
}

export default Button