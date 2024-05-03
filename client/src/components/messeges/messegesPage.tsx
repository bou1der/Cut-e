import React, {useEffect} from "react";
import User from './userInMessageList.tsx'
import MessagesBlock from "./messagesBlock.tsx"

// import './messegesPage.css'

import {observer} from "mobx-react-lite";



import messageStore from "../../stores/message-store.ts";
// import {v4 as uuidv4} from 'uuid'

//services

// services

const UserMessages = observer(() => {
    useEffect(()=>{
        window.addEventListener('keydown',(event) =>{
            if (event.key === "Escape"){
                messageStore.ClearCurrentChat()
            }
        })
    },[])
    return (
        <div className="w-screen h-screen flex flex-row items-center justify-center xl:gap-12" >
            <article className="xl:w-72 xl:h-5/6 bg-StrongPink p-5 rounded-lg inner-shadow flex flex-col gap-1">
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
            <article className="xl:w-5/12 xl:h-5/6 bg-White inner-shadow rounded-sm text-MainTextColor font-MainFont flex flex-col justify-between">
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
