import React from "react";
import userLogo from './resource/user_logo.svg'
import messageStore from "../../stores/message-store.ts";

interface props{
    nickname:string
    id:number
}
export const User = ({nickname,id}:props) =>{
    return(
        <div className="flex flex-row gap-1.5 text-MainTextColor font-MainFont p-2 py-2.5 hover:bg-HoverButtons rounded-sm items-start transition-colors" onClick={() => messageStore.selectChat(id)}>
            <img className="min-w-12" src={`${userLogo}`} alt=""/>
                <div className="overflow-x-hidden">
                    <h3 className="text-20 font-semibold">{nickname}</h3>
                    <p className="text-12">you:last_message</p>
                </div>
                <div className="ml-auto">
                    <p className="text-10">17.12.2023</p>
                </div>
        </div>
    );
}
export default User;