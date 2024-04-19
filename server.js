const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const dbConfig=require('./Config/dbConnfig');
const cookieParser=require('cookie-parser');

const app=express();
dotenv.config();
app.use(cors());

const PORT =process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.get('/health',(req,res)=>{
    res.json({
        service:'Good health',
        status:'true'
    })
})

app.listen(PORT,(err)=>{
    if(err){
        console.log('server not connected');
    }
    console.log(`server connected at port ${PORT}`)
})