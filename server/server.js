import express from "express";
import mysql from "mysql2";
import cors from "cors";
import jwt from "jsonwebtoken"
import bcrypt, { compare } from "bcrypt"
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ash@23923',
    database: 'nextbus',
})

app.post('/login',(req,res)=>{
       const email = req.body.email;
    const password = req.body.password;
    const sql='select * from users WHERE usn = ? AND pass = ?';
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json({Error : "Login Error in Server"});
        if(data.length > 0){
                compare(req.body.password,data[0].password, (err,response) => {
                    if(err) return res.json({Error: "Invalid Credentials"});
                    if(response){
                        return res.json({Status: "Success"});
                    }
                    else{
                        return res.json({Status: "fail"});
                    }
                })
        }else{
            return res.json({Error: " Email does not Exits"});
        }
    })
    
})

app.listen(5000, () =>{
    console.log("Running...");
})