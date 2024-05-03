import React from 'react';
import {useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UpdateStudent() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {id} = useParams()
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:8081/update/${id}`, { name, email})
        .then(res => {
            console.log("Updated student", res);
            navigate('/');
        })
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        
        <div className = 'w-50 bg-white rounded p-3'>
            <form onSubmit ={handleSubmit}>

                <h2> Ajouter Etudiant</h2>

                <div className= 'mb-2'>
                    <label htmlFor="nom">Nom : </label>
                    <input type="text" placeholder= 'Entrez votre nom' className ='form-control' onChange ={e => setName(e.target.value)} />
                    
                </div>

                <div className= 'mb-2'>
                    <label htmlFor=""> Email </label>
                    <input type="email" placeholder= 'Entrez votre email' className='form-control' onChange = {e => setEmail(e.target.value)} />   
                </div>

                <button className = 'btn btn-success'> Soumettre</button>

            </form>
        </div>

    </div>
  )
}

export default UpdateStudent