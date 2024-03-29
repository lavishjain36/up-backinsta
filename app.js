const express=require('express');
const app = express();
const mongoose=require('mongoose');
const PORT=5000;
const {MONGOURI}=require('./keys')
var cors = require('cors')
app.use(cors())


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB")
})

mongoose.connection.on('error',(err)=>{
    console.log("Error connecting to MongoDB",err)
})
// o6z9oWIRqXSN9PhO
require('./models/user')
require('./models/post');
app.use(express.json());
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

mongoose.model("User")


// const customMiddleware =(req,res,next)=>{
//     console.log('Middleware Executed');
//     next();
// }
// app.use(customMiddleware)

// app.get("/",(req,res)=>{
// console.log("Home")
// res.send("Hello World")
// })
 
// app.get("/about",(req,res)=>{
//     console.log("About")
//     res.send("About Page")
// })

app.listen(PORT,()=>{
    console.log("Server is running on port",PORT)
})