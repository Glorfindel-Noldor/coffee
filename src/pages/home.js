import React, { useEffect, useState, useTransition } from "react";
import { Outlet } from "react-router-dom";

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
        console.log(`fetch fetched`)
    },[])


    return(
        <>
          <Outlet context={{coffee, api, setCoffee}}/>
          <small>{
                coffee.map((item)=>{
                    return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <small>{item.description}</small>
                    </div>
                    )
                })
            }</small>
        </>
    )
}

export default Home;
