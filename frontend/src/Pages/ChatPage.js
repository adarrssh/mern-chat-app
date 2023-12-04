import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const ChatPage = () => {

    const [chats, setChats] = useState([])
    const fetchChats = async () => {
        try {
            const {data} = await axios.get('http://localhost:4000/api/chat')
            setChats(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchChats()
    },[])
  return (
    <div>{
        chats.map(
            chat =>

            <div key={chat.id}>{chat.chatName}</div>
            
            )}</div>
  )
}

export default ChatPage