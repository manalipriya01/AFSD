
const PORT=4000
const express = require("express")
const cors = require('cors');
const sessions = require('./sessions');
const { Tables } = require("./tables");

const { pool } = require('./database');
const {userRouter} = require('./auth')


const app = express()
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["POST","DELETE","PUT","GET","OPTIONS","HEAD"],
    credentials:true,
}));

app.use(express.json()) 
app.use(sessions)


app.use('/api',userRouter);

app.get('/api/data', (req,res)=>{
    const data = {
        message: "mini project"
    };

    res.json(data)
});

async function startServer() {
    try {
        await Tables()
        app.listen(PORT,()=>{console.log("Server is listening on port 5000")});


    }catch(err) {
        console.error('Error setting up tables and starting server', err);
    }
}

startServer()