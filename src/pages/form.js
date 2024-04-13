import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Form(){
    const { api, coffee, setCoffee } = useOutletContext();
    const [stateName, setStateName] = useState('')
    const [stateDescription, setStateDescription] = useState('')
    const [stateOrigin, setStateOrigin] = useState('')
    const [stateIngredients, setStateIngredients] =useState('')

    const InputChange= (e)=>{
        const {name, value} = e.target
        if (name === 'name' && value.length < 11) {
            setStateName(value);
        } else if (name === 'description') {
            setStateDescription(value);
        } else if(name === 'origin'){
            setStateOrigin(value)
        } else if (name === 'ingredients'){
            setStateIngredients(value)
        }
    }

    const FormSubmit= (e)=>{
        e.preventDefault();

    if (!stateName || stateName.length < 2 || !stateDescription || stateDescription.length < 2 || !stateOrigin || stateOrigin.length < 2 || !stateIngredients || stateIngredients.length < 2) {
    alert('Please fill in all fields with at least two characters');
    return;
}


        const newCoffee = {
            "name": stateName,
            "description": stateDescription,
            "origin": stateOrigin,
            "ingredients": stateIngredients
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
                console.log(`error in post`)
            }
        })
        .then((data)=>(setCoffee([data, ...coffee])))
        .catch((error)=>(console.log(error)))
        setStateDescription('');
        setStateName('');
        setStateOrigin('');
        setStateIngredients('');
    }

    return(
        <>
            <form onSubmit={FormSubmit}>
                <input value={stateName} onChange={InputChange} type="text" placeholder="drink name" name="name" /><br/>
                <input value={stateDescription} onChange={InputChange} type="text" placeholder="description" name="description" /><br/>
                <input value={stateOrigin} onChange={InputChange} type="text" placeholder="country origin" name="origin" /> <br/>
                <input value={stateIngredients} onChange={InputChange} type="text" placeholder="ingredients" name="ingredients"/> <br/>
                <input value='submit' type="submit" />
            </form>
        </>
    )
}
export default Form;
