import { Outlet, NavLink } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";






const Layout =() =>{
    

return <div>
     
    <nav >
        <ul id="nav" className="nav_item" >
            <li>
                <NavLink  to="/Hogar" onClick={ScrollToTop}>Hogar</NavLink>
            </li>
            <li>
                <NavLink  to="/Empresas" onClick={ScrollToTop}>Empresas</NavLink >
            </li>
            <li>
                <NavLink  to="/Servicios" onClick={ScrollToTop}>Servicios</NavLink >
            </li>
            <li>
                <NavLink  to="/Contacto" onClick={ScrollToTop}>Contacto</NavLink >
            </li>
        </ul>

       
    </nav>
    
    <Outlet/>

    
</div>

}

export default Layout;