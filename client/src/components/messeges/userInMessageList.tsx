import React from "react";
import userLogo from './resource/user_logo.svg'
import messageStore from "../../stores/message-store.ts";

interface props{
    nickname:string
    id:number
}
export const User = ({nickname,id}:props) =>{
    return(
        <div className="user" onClick={() => messageStore.selectChat(id)}>
            <img src={userLogo} alt=""/>
                <div className="user_info">
                    <h3>{nickname}</h3>
                    <p>you:last_message</p>
                </div>
                <div className="timeblock">
                    <p>17.12.2023</p>
                </div>
        </div>
    );
}
export default User;