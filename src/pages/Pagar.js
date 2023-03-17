import React from 'react'
import logo_baloto from"../Styles/img/logo_baloto.png";
import logo_efecty from"../Styles/img/logo_efecty.png";
import logo_supergiros from"../Styles/img/logo_supergiros.png";

function Pagar() {
  return (


    <div className='fondo'>

      <div className='container_pagar'>
        <h1>Paga tu factura de forma segura</h1>
        <p>Selecciona tu proveedor de confianza</p>

        <div className='botones_link'>
                <button><a href='https://checkout.wompi.co/l/test_sPcAnd'>Boton Epago</a></button>
                <button><a href='https://checkout.wompi.co/l/test_sPcAnd'>Boton WAMPI</a></button>
        </div>
                <div className='puntos_autorizados'>

                  <p>Recuerda que tambien puedes pagar tu factura en los diferentes puntos autorizados</p>

                  <div className='marcas'>
                    <div className='logo_marcas'><img src={logo_baloto} alt="logobaloto"/></div>
                    <div className='logo_marcas'><img src={logo_efecty} alt="logoefecty"/></div>
                    <div className='logo_marcas'><img src={logo_supergiros} alt="logosupergiros"/></div>
                    
                    
                  </div>
                  <p>Punto de recaudo en la direción , bario,</p>
                </div>
      </div>
    </div>
  )
}

export default Pagar