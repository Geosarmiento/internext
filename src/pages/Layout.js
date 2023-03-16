import { Outlet, NavLink } from "react-router-dom"


const Layout =() =>{

    

return <div>
     
    <nav >
        <ul id="nav" className="nav_item" >
            <li>
                <NavLink  to="/Hogar"/*onClick="scroll(0, 100)*/>Hogar</NavLink>
            </li>
            <li>
                <NavLink  to="/Empresas" /*onClick="scroll(0, 100)*/>Empresas</NavLink >
            </li>
            <li>
                <NavLink  to="/Servicios" /*onClick="scroll(0, 100)*/>Servicios</NavLink >
            </li>
            <li>
                <NavLink  to="/Contacto" /*onClick="scroll(0, 100)*/ >Contacto</NavLink >
            </li>
        </ul>

       
    </nav>
    
    <Outlet/>

    
</div>

}

export default Layout;