import express from 'express';
import Connection from'./database/db.js'
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import Routes from './routes/route.js';

const app=express();

// express ka server is done by listen function..

dotenv.config();

app.use(bodyParser.json({ extended:true }));
app.use(bodyParser.urlencoded({ extended:true }));



app.use(cors());

// passing default end point..
app.use('/',Routes);

const PORT=8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);

app.listen(PORT,() =>  console.log("server running at port"));