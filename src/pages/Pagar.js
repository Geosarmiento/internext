import React from 'react'
import logo_baloto from"../Styles/img/logo_baloto.png";
import logo_efecty from"../Styles/img/logo_efecty.png";
import logo_supergiros from"../Styles/img/logo_supergiros.png";
import logo_wompi from "../Styles/img/logo_wompi.png"

function Pagar() {
  return (


    <div className='fondo'>

      <div className='container_pagar'>
        <h1>Paga tu factura de forma segura</h1>
        <p>Realiza el pago de tu factura, con el medio de pago que mas te guste</p>

        <div className='botones_link'>
                   <div className="logo_pagar">
                         <img src={logo_wompi} alt="logowompi"/>
                 
                <button><a href='https://checkout.wompi.co/l/VPOS_0P79kC'>Pagar Aqui</a></button>
                </div>
        </div>
                <div className='puntos_autorizados'>

                  <h5>Recuerda que tambien puedes pagar tu factura en los 
                    diferentes puntos autorizados</h5>

                  <div className='marcas'>
                    <div className='logo_marcas'><img src={logo_baloto} alt="logobaloto"/></div>
                    <div className='logo_marcas'><img src={logo_efecty} alt="logoefecty"/></div>
                    <div className='logo_marcas'><img src={logo_supergiros} alt="logosupergiros"/></div>
                    
                    
                  </div>

                  <h5>PUNTOS DE RECAUDO</h5>

                  <div className='oficinas'>
                      
                        <div className='puntos'>
                        <p>LA PLAYA</p> 
                        Calle 14 N° 16 - 131
                        </div>

                        <div className='puntos'>
                        <p>CAMPO DE LA CRUZ</p>
                        Calle 9 # 2 - 92 
                        </div>

                        <div className='puntos'>
                        <p>SUAN</p>
                        Calle 4 # 10 - 52 LOCAL 2  Centro
                        </div>

                        <div className='puntos'>
                        <p>PUERTO GIRALDO</p>
                        Carrera 10 # 8D 22 El reten
                        </div>

                        <div className='puntos'>
                        <p>PONEDERA</p>
                        Cra 15 #18-14  La Pachita
                        </div>
                  </div>
                 
                </div>
      </div>
    </div>
  )
}

export default Pagar