import React from 'react'
import SendFilesButtonSrc from "./resource/send_files.svg";
import SendMessageButtonSrc from "./resource/send_messege.svg";
import Avatar from "./resource/user_logo_noborder.svg";
import Activity from "./resource/activity.svg";
import SearchButtonSrc from "./resource/search_button.svg";
import MoreButtonSrc from "./resource/more_button.svg";

import messageStore, {currentChat} from "../../stores/message-store.ts";


function messagesBlock({props}:{props:currentChat | null}){
    const [txtMessage,setTxtMessage] = React.useState('')
    return(
        <>
            <div className="dialog_info">
                <span className="user_info_block">
                    <img src={Avatar} alt=""/>
                    <div>
                        <h3>{props?.chat.name}</h3>
                        <span><img src={Activity} alt=""/><p>activity</p></span>
                    </div>
                </span>
                <div className="buttons_dialog">
                    <button><img src={SearchButtonSrc} alt=""/></button>
                    <button><img src={MoreButtonSrc} alt=""/></button>
                </div>
            </div>

            <div className="messegesBlock">

                {props?.messages &&

                    props.messages.map((el) => {
                        return (
                            <>
                                <div className={`message ${messageStore.userId === el.from ? 'sender_me' : 'sender_other'}`}>
                                    <div><img src={"#"} alt={''}/></div>
                                    <p>{el.text}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <span className="typeMessege">

                <button><img src={SendFilesButtonSrc} alt=""/></button>
                <div className="inputMessenge"><textarea value={txtMessage} onChange={(el) =>{
                    setTxtMessage(el.target.value)}} placeholder="Write a messege......"></textarea></div>
                <button onClick={undefined}
                    // sendMessage(txtMessage,yourId,setMessages,messages)
                ><img src={SendMessageButtonSrc}  alt=""/></button>
            </span>
        </>
    )
}

export default messagesBlock