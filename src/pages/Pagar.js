import React from 'react'
import logo_baloto from"../Styles/img/logo_baloto.png";
import logo_efecty from"../Styles/img/logo_efecty.png";
import logo_supergiros from"../Styles/img/logo_supergiros.png";

function Pagar() {
  return (


    <div className='fondo'>

      <div className='container_pagar'>
        <h1>Paga tu factura de forma segura</h1>
        <p>Realiza el pago de tu factura, con el medio de pago que mas te guste</p>

        <div className='botones_link'>
                <button><a href='https://checkout.wompi.co/l/test_sPcAnd'>Boton Epago</a></button>
                <button><a href='https://checkout.wompi.co/l/test_sPcAnd'>Boton WAMPI</a></button>
        </div>
                <div className='puntos_autorizados'>

                  <h5>Recuerda que tambien puedes pagar tu factura en los 
                    diferentes puntos autorizados</h5>

                  <div className='marcas'>
                    <div className='logo_marcas'><img src={logo_baloto} alt="logobaloto"/></div>
                    <div className='logo_marcas'><img src={logo_efecty} alt="logoefecty"/></div>
                    <div className='logo_marcas'><img src={logo_supergiros} alt="logosupergiros"/></div>
                    
                    
                  </div>

                  <div className='oficinas'>
                        <h5>PUNTOS DE RECAUDO</h5>
                        <p>LA PLAYA: Calle 14 N° 16 - 131</p> 
                        <p>CAMPO DE LA CRUZ: Calle 9 # 2 - 92 </p>
                        <p>SUAN: Calle 4 # 10 - 52 LOCAL 2  Centro</p>
                        <p>PUERTO GIRALDO: Carrera 10 # 8D 22 El reten</p>
                        <p>PONEDERA: Cra 15 #18-14  La Pachita</p>
                  </div>
                 
                </div>
      </div>
    </div>
  )
}

export default Pagar