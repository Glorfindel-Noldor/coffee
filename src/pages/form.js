import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Form(){
    const { api, coffee, setCoffee } = useOutletContext();
    const [formData, setFormData] = useState({
        stateName: '',
        stateDescription: '',
        stateIngredients: '',
        stateOrigin: '',
    })
    const {stateName, stateDescription, stateIngredients, stateOrigin } = formData

    const InputChange= (e)=>{
        const {name, value} = e.target
        
        setFormData(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    const FormSubmit= (e)=>{
        e.preventDefault();

    if(
        !stateName || stateName.length < 2 || !stateDescription || stateDescription.length < 2 ||
        !stateOrigin || stateOrigin.length < 2 || !stateIngredients || stateIngredients.length < 2
        ){
        alert('Please fill in all fields with at least two characters');
        return null;
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
        setFormData({
            stateName: '',
            stateDescription: '',
            stateIngredients: '',
            stateOrigin: '',
        })
        
        console.log(`POST`)
    }

    return(
        <>
            <form onSubmit={FormSubmit}>
                <input value={stateName} onChange={InputChange} type="text" placeholder="drink name" name="stateName" /><br/>
                <input value={stateDescription} onChange={InputChange} type="text" placeholder="description" name="stateDescription" /><br/>
                <input value={stateOrigin} onChange={InputChange} type="text" placeholder="country origin" name="stateOrigin" /> <br/>
                <input value={stateIngredients} onChange={InputChange} type="text" placeholder="ingredients" name="stateIngredients"/> <br/>
                <input value='submit' type="submit" />
            </form>
        </>
    )
}
export default Form;
