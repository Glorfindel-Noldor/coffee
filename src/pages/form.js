import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Form(){
    const { api, coffee, setCoffee } = useOutletContext();
    const [stateName, setStateName] = useState('')
    const [stateDescription, setStateDescription] = useState('')


    const InputChange= (e)=>{
        const {name, value} = e.target
        if (name === 'name' && value.length < 11) {
            setStateName(value);
        } else if (name === 'description') {
            setStateDescription(value);
        }
    }

    const FormSubmit= (e)=>{
        e.preventDefault();
        if(stateDescription.length < 2 && stateName.length < 2){
            alert(`type some more stuff`)
            return null
        }
        const newCoffee = {
            "name": stateName,
            "description": stateDescription
        }
        const post = {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffee), 
        }
        fetch(api,post)
        .then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                console.log(`error in fetch`)
            }
        })
        .then((data)=>(setCoffee([data, ...coffee])))
        .catch((error)=>(console.log(error)))
        setStateDescription('');
        setStateName('');
    }

    return(
        <>
            <form onSubmit={FormSubmit}>
                <input value={stateName} onChange={InputChange} type="text" placeholder="text" name="name" /><br/>
                <input value={stateDescription} onChange={InputChange} type="text" placeholder="text" name="description" /><br/>
                <input value='submit' type="submit" />
            </form>
        </>
    )
}

export default Form;
