import React from "react";
import userLogo from './resource/user_logo.svg'
import MessagesStore from "../../stores/MessagesStore.js";

export const User = ({chatid,nickname}) =>{
    return(
        <div className="user" onClick={() =>{MessagesStore.isSelected(chatid,nickname)}}>
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