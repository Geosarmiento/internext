import React, { Component } from "react";



class Error404 extends Component{
    render(){
        return(
            <div className="container row col-auto
            m-auto mt-100 justify-conten-center text-center">
          <h1>404</h1>
          <p>Page not found</p>

          <p>Algo no esta bien, Verifica la URL e intentalo nuevamente</p>
           
           </div>
                
        );
    }
}

export default Error404