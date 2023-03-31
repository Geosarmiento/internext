import React from 'react'
import campo from "../Styles/img/campo.png";
import audifarma from "../Styles/img/audifarma.png";
import mobility from "../Styles/img/mobility.png";
import soluciones from "../Styles/img/soluciones.png";
import newwave from "../Styles/img/newwave.png";

function NuestrosClientes() {
  return (
    <div className='nuestrosClientes'><h2>Nuestros Clientes</h2>

        <div className='logoclientes '>
                <img src={campo} alt='campo'/>
                <img src={audifarma} alt='audifarma'/>
                <img src={mobility} alt='movility'/>
                <img src={soluciones} alt='soluciones'/>
                <img src={newwave} alt='newwave'/>
               
        </div>
    
    
    
    
    
    </div>
  )
}

export default NuestrosClientes