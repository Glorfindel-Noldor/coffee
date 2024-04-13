import React from "react";
import { useOutletContext } from "react-router-dom";

function Delete(){
    const { setCoffee, coffee, api }= useOutletContext()

    const handleDelete= (remove)=>{
        const del = {
            method: "DELETE",
        } 
        fetch(`${api}/${remove}`,del)
        .then(res =>{
            if(res.ok){
                res.json()
            }else alert(`error:\n${res}`)
        })
        .then( () =>{
            const itemDeleted = coffee.filter(item => item.id !== remove)
            setCoffee(itemDeleted)
        }
        )

    }

    return(
        <>
            <div>{

                coffee.map(item=>{
                    return(
                        <div key={item.id}>
                        <p>{item.name}</p>
                        <input value='x' type="button"
                            onClick={()=>handleDelete(item.id)} 
                        />
                        </div>
                    )
                })
            
            }</div>
        </>
    )
}
export default Delete;