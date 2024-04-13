import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

function Home(){
    const api = 'http://localhost:3001/coffee'
    const [coffee, setCoffee] = useState([])

    useEffect(()=>{
        fetch(api)
        .then((res)=>{
            if(res.ok){
                return res.json()
            }else {
                console.log(`json error or something`)
            }
        })
        .then((data)=>(setCoffee(data)))
        .catch((error)=>(console.log(error)))
        console.log(`fetch ran`)
    },[])

    return(
        <>
            <NavBar/>
            <Outlet context={{
                coffee,
                api, 
                setCoffee
            }}/>
        </>
    )
}

export default Home;
