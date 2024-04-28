import React from "react";
import User from './userInMessageList.tsx'
import MessagesBlock from "./messagesBlock.tsx"
import './messegesPage.css'

import {observer} from "mobx-react-lite";



import messageStore from "../../stores/message-store.ts";
// import {v4 as uuidv4} from 'uuid'
//services

// services

const UserMessages = observer(() => {

    return (
        <div className="content">
            <article className="userMesseges">
                <button style={{width:"100px",height:"20px"}} onClick={()=>{console.log(messageStore.stateDownloadingMessages)}}></button>
                {messageStore.chats &&
                    messageStore.GetChats().map(el => {
                        return (
                            <>
                                <User key={el.id} nickname={el.name} id={el.id}/>
                                <div key={Math.random()} className={"separator"}></div>
                            </>
                        )
                    })
                }
            </article>
            <article className="blockMesseges">
                {messageStore.GetCurrentChat() ?
                    messageStore.stateDownloadingMessages ? <div>Анимация загрузки</div> : <MessagesBlock props={messageStore.GetCurrentChat()}/>
                    :
                    <h1>Выберите диалог</h1>
                }
            </article>
        </div>

    );
})

export default UserMessages
