import express from "express";
import dotenv from "dotenv"
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import userRouter from "./routers/user.routers.js"
import chatRouter from "./routers/chat.routers.js"
import messageRouter from "./routers/message.routers.js"
import { notFound, errorHandler } from "./middlewares/error.middlewares.js"
dotenv.config({ path: './.env' })
import path from "path"


const app = express()
const PORT = process.env.PORT || 5000
connectDB()

app.use(express.json({ limit: "16kb" }))

app.use('/api/user', userRouter)
app.use('/api/chat', chatRouter)
app.use('/api/message', messageRouter)

app.use(notFound)
app.use(errorHandler)

const server = app.listen(PORT, console.log(`server is running on port ${PORT}`))
const io = new Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: "*",
    }
})
io.on("connection", (socket) => {
    socket.on("setup", (userData) => {
        socket.join(userData._id)
        socket.emit("connected")
    })

    socket.on("join chat", (room) => {
        socket.join(room)
    })

    socket.on("typing", (room) => socket.in(room).emit("typing"))

    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"))

    socket.on('new message', (newMessageRecieved) => {
        var chat = newMessageRecieved.chat
        if (!chat.users) return console.log("chat.users not defined")
        chat.users.forEach((user) => {
            if (user._id == newMessageRecieved.sender._id) return;
            socket.in(user._id).emit("message recieved", newMessageRecieved)
        })
    })

    socket.off("setup", () => {
        console.log("USER DISCONNECTED")
        socket.leave(userData._id)
    })
})    
