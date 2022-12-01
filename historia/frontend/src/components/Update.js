import axios from 'axios';
import React from 'react';
import "./Add.css";
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Update = () => {
    const [note, setNote] = useState({
        temat: "",
        tresc: "",
    });

    const navigate = useNavigate();
    const location = useLocation();

    const notatkaId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/notatka/" + notatkaId, note)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(note)
    return(
        <div className='form'>
            <div className='header'>
                <h1>Dodaj nową notatke</h1>
            </div>
            <div className='context'>
                <input className="temat" type="text" placeholder="temat" onChange={handleChange} name="temat"/>
                <input className="tresc" type="text" placeholder="tresc notatki" onChange={handleChange} name="tresc"/>

                <button className='Add' onClick={handleClick}><p>Edytuj!</p></button>
            </div>
        </div>
    )
}

export default Update;