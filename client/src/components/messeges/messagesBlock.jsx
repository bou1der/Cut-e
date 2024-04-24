import React from 'react'
import DialogInfo from "./dialogInfo.jsx";
import SendFilesButtonSrc from "./resource/send_files.svg";
import SendMessageButtonSrc from "./resource/send_messege.svg";

import MessagesStore from '../../stores/MessagesStore.js';
// import webSock from "../../services/webSock.js";
function messagesBlock({yourId,nickname,messages,setMessages,socket}){
    const [txtMessage,setTxtMessage] = React.useState('')
    React.useEffect(()=>{
        setMessages(MessagesStore.messages);
        socket.on('message', mess => {
            console.log(mess)
            setMessages(prevMessages => [...prevMessages, mess])
        })
        return () => {
            socket.off('message')
        }
    }, [socket, setMessages])
    const handleSend = () =>{
        socket.emit("message",{chatid:MessagesStore.chatid,text: txtMessage,from:yourId})
        setTxtMessage('')
    }
    return(
        <>
            <DialogInfo nickname={nickname}/>

            <div className="messegesBlock">
                {messages &&

                    messages.map((el)=>{return(
                        <>
                            <div className={`message ${yourId === Number(el.from) ? 'sender_me' : 'sender_other'}`}>
                                <div><img src={"#"} alt={''}/></div>
                                <p>{el.text}</p>
                            </div>
                        </>
                    )})
                }
            </div>

            <span className="typeMessege">

                <button><img src={SendFilesButtonSrc} alt=""/></button>
                <div className="inputMessenge"><textarea value={txtMessage} onChange={(el) =>{
                    setTxtMessage(el.target.value)}} placeholder="Write a messege......"></textarea></div>
                <button onClick={handleSend}
                    // sendMessage(txtMessage,yourId,setMessages,messages)
                ><img src={SendMessageButtonSrc}  alt=""/></button>
            </span>
        </>
    )
}

export default messagesBlock