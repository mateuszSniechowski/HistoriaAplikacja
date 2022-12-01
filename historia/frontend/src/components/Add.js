import axios from 'axios';
import React from 'react';
import "./Add.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [note, setNote] = useState({
        temat: "",
        tresc: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/notatka", note)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(note)
    return(
        <div className='form'>
            <div className='header'>
                <h1>Dodaj nowa notatke</h1>
            </div>
            <div className='context'>
                <input className="temat" type="text" placeholder="temat" onChange={handleChange} name="temat"/>
                <input className="tresc" type="text" placeholder="tresc notatki" onChange={handleChange} name="tresc"/>

                <button className='Add' onClick={handleClick}><p>Dodaj!</p></button>
            </div>
        </div>
    )
}

export default Add;