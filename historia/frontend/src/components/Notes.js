import React from 'react';
import './Notes.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const fetchAllNotes = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/notatka")
                setNotes(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllNotes()
    },[])

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/notatka/" + id)
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className='container'>
            <div className='header'>
                <h1 className='title'>Hisotria - Świat w II połowie XIX w.</h1>

                    <button className='button'> 
                        <Link to="/add"><a>Dodaj nowa notatke</a></Link>
                    </button>

            </div>
            <div className='notes'>
                {notes.map(note => (
                    <div className='note' key={note.id}>
                        <button className='update'><Link to={`/update/${note.id}`}><a>edytuj</a></Link></button>
                        <button className='delete' onClick={()=> handleDelete(note.id)}>X</button>
                        <h2>{note.temat}</h2>
                        <p>{note.tresc}</p>
                        
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Notes;