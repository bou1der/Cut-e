import React, {useEffect} from 'react'

import SendFilesButtonSrc from "./resource/send_files.svg";
import SendMessageButtonSrc from "./resource/send_messege.svg";
import Avatar from "./resource/user_logo_noborder.svg";
import Activity from "./resource/activity.svg";
import SearchButtonSrc from "./resource/search_button.svg";
import MoreButtonSrc from "./resource/more_button.svg";
import uwu from "./resource/^•v•^.svg";

import messageStore, {currentChat} from "../../stores/message-store.ts";
import SocketStore from "../../stores/socket-events-store.ts";


function messagesBlock({props}:{props:currentChat | null}){
    const [txtMessage,setTxtMessage] = React.useState('')
    useEffect(()=>{
        const area = document.getElementById("messages-area")
        if (!area) return
        area.scrollTop = area.clientHeight
    },[props?.messages])
    return(
        <>
            <div className="w-full flex h-16 items-center justify-between px-10 py-1.5">
                <span className="flex items-center gap-4">
                    <img src={`${Avatar}`} alt=""/>
                    <div>
                        <h3 className="text-20">{props?.chat.name}</h3>
                        <span className="flex items-center gap-2"><img src={`${Activity}`} alt=""/><p className="text-12">activity</p></span>
                    </div>
                </span>
                <div className="buttons_dialog">
                    <button className="mr-3 p-1 rounded-sm hover:bg-HoverButtons"><img src={`${SearchButtonSrc}`} alt=""/></button>
                    <button className="p-1 rounded-sm hover:bg-HoverButtons"><img src={`${MoreButtonSrc}`} alt=""/></button>
                </div>
            </div>

            <div className="grow flex flex-col overflow-y-scroll px-4 gap-8 pb-10 pt-4 scrollbar-hide"
            id="messages-area"
            >

                {props?.messages &&

                    props.messages.map((el) => {
                        return (
                            <>
                                <div className={`flex w-full ${messageStore.userId === el.from ? 'sender_me' : 'sender_other'}`}>
                                    <div><img src={"#"} alt={''}/></div>
                                    <div className="inline-block py-1.5 px-6 bg-StrongPink rounded-sm max-w-96 min-h-6 relative">
                                        <p className="break-words">{el.text}</p>
                                        {/*<p className="absolute bottom-0 -right-14 text-10">01.05.2024</p>*/}
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <span className="w-full h-16 flex flex-row justify-between px-10 py-2">

                <button><img src={`${SendFilesButtonSrc}`} alt=""/></button>
                <div className="grow px-7 h-full relative"><textarea id="inputMessage" className="w-full h-full rounded-sm bg-CreamPink text-MainTextColor resize-none overscroll-y-none pl-5 text-18 pt-3 placeholder:text-MainTextColor focus:outline-none scrollbar-hide" value={txtMessage}
                    onChange={(el) =>{
                        setTxtMessage(el.target.value)
                    }}
                    onKeyDown={(event)=>{
                        if (event.shiftKey && event.keyCode === 13) {
                            setTxtMessage(txtMessage + ` \n`)
                            return;
                        }
                        if (event.code === "Enter") {
                            event.preventDefault()
                            // if (!txtMessage.trim()) {
                            //     return;
                            // }
                            SocketStore.emitMessage(txtMessage)
                            setTxtMessage('')
                        }
                    }} placeholder="Write a messege......"></textarea>
                <label className="absolute top-2.5 right-14 cursor-text" htmlFor="inputMessage"><img src={`${uwu}`} alt=""/></label>
                </div>
                <button
                    onClick={()=>{
                        // if (!txtMessage.trim()) {
                        //     return;
                        // }
                    SocketStore.emitMessage(txtMessage)
                    setTxtMessage('')
                    }}


                ><img src={`${SendMessageButtonSrc}`}  alt=""/></button>
            </span>
        </>
    )
}

export default messagesBlock