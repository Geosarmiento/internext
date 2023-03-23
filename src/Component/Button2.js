import React, { Component } from "react";
import { Link } from "react-router-dom";



class Button2 extends Component{
    render(){
        return(
            
         
           <div className="buttom2">
                <Link  to="https://clientes.internext.com.co/solicitar-instalacion/internext/" onClick="scroll(0, 100)">Contratar</Link>
           </div>
         
            
        );
    }
}

export default Button2