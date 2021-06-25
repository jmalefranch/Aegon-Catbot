import React from 'react'
import './InputChat.css'

const InputChat = ( {sendMessage, getMessage, msg, chat}) => {
    return (
        <form className="chatbot-chat-input-container" onSubmit={(e)=>sendMessage(e)}>            
           <input disabled={chat.length >= 3 ? true : false} type="text" placeholder={chat.length>=3 ? "Ya no podés escribirme acá.":"Escribí tu nombre"} value={msg.msg} onChange={(e)=>getMessage(e.target.value)}/>
           <button type="submit" ></button>
        </form>
    )
}

export default InputChat;