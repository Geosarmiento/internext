import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button2 extends Component{
    render(){
        return(
            
          
           <div className="buttom2">
                <Link  to="/contacto">Contratar</Link>
           </div>
           
        );
    }
}

export default Button2