import { Outlet, NavLink } from "react-router-dom"




const Layout =() =>{

return <div>
     
    <nav >
        <ul id="nav" className="nav_item " >
            <li>
                <NavLink  to="/Hogar">Hogar</NavLink>
            </li>
            <li>
                <NavLink  to="/Empresas">Empresas</NavLink >
            </li>
            <li>
                <NavLink  to="/Servicios">Servicios</NavLink >
            </li>
            <li>
                <NavLink  to="/Contacto">Contacto</NavLink >
            </li>
        </ul>

       
    </nav>
    
    <Outlet/>

    
</div>

}

export default Layout;