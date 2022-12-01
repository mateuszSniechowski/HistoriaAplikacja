import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'historia'
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json("hello this is a backend")
})

app.get('/notatka', (req, res) => {
    const q = "SELECT * FROM notatka"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post("/notatka", (req, res) => {
    const q = "INSERT INTO notatka (`temat`, `tresc`) VALUES (?)"
    const values = [
        req.body.temat,
        req.body.tresc
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("notatka has been created");
    })
})

app.delete("/notatka/:id", (req, res) => {
    const noteId = req.params.id;
    const q = "DELETE FROM notatka WHERE id = ?"

    db.query(q, [noteId], (err,data) => {
        if(err) return res.json(err);
        return res.json("notatka has been deleted");
    })
})


app.put("/notatka/:id", (req, res) => {
    const noteId = req.params.id;
    const q = "UPDATE notatka SET `temat` = ?, `tresc` = ? WHERE `id` = ?"

    const values = [
        req.body.temat,
        req.body.tresc
    ]

    db.query(q, [...values, noteId], (err,data) => {
        if(err) return res.json(err);
        return res.json("notatka has been updated");
    })
})


app.listen(8800, () => {
    console.log("Connected to backend");
})