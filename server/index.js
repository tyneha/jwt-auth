const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const authRoutes=require('./Routes/AuthRoutes');
const app=express();
const cookieParser=require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();


app.listen(process.env.PORT || 4001,()=>{
    //console.log("Server started at port `Port no. ${process.env.PORT}`")
    console.log(`Port no. ${process.env.PORT}`);
});

mongoose.connect(process.env.URL,
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("DB connection successfull");
}).catch(err=>{
    console.log(err.message);
      
})

app.use(
    cors({
        origin:["http://localhost:3000"],
        method:["GET","POST"],
        credentials:true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);
