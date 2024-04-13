import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){


    return(
        <nav>
            {/* <NavLink to='/' > home</NavLink> */}
            <NavLink to='/form' > form</NavLink>
            <NavLink to='/search' > search</NavLink>
            <NavLink to='/delete' > delete</NavLink>
        </nav>
    )
}
export default NavBar;