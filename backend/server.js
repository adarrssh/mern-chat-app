const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const cors = require('cors');
const { connectDB } = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { errorHandler, notFound} = require('./middleware/errorMiddleware') 


connectDB()
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 4000
console.log(process.env.PORT)
app.get("/",(req,res)=>{
    res.send("yo")
})


app.get("/api/chat/:id",(req,res)=>{
    const singleChat = chats.find((c)=> c._id === req.params.id)
    res.send(singleChat)
})

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT,console.log(`server started on ${PORT}`))