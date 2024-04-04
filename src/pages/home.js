import React from "react";
import { Outlet } from "react-router-dom";

function Home(){


    return(
        <>
            <h1>home component</h1>
            <Outlet/>
        </>
    )
}


export default Home;