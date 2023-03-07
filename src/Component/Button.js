import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";




class Button extends Component{

   

    render(){
        return(
            
          
           <div className="buttomPrimario">
                <Link  to="/contacto" onClick={ScrollToTop}>Contratar</Link>
           </div>
           
        );
    }
}

export default Button