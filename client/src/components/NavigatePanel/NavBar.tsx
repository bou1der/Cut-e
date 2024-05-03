import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import uwu from './resource/( ˶^▾^˶ ).svg'
import friends from './resource/myFriends.svg'
import news from './resource/News.svg'
import sendMessege from './resource/sendMessege.svg'
import myProfile from './resource/myProfile.svg'
import myGroups from './resource/myGroups.svg'

import authorizationStore from "../../stores/authorization-store";
import Notification from "../notification/notification.tsx";
import notificationStore from "../../stores/notification-store.ts";
import messageStore from "../../stores/message-store.ts";

const Navigation = ({userID}:{userID:number}) => {
    return(

        <>
            <button style={{zIndex: 100,position:"absolute",right:"0px"}}
            onClick={()=>{
                notificationStore.MessageNotification({chat:{id:1,name:"test"},message:{id:1,chatId:1,text:"message",from:1,timeStamp:"time"}})
            }}
            >notification</button>

            <header className="xl:w-32 h-full absolute mt-auto flex items-center">
                <div className="w-full xl:h-3/4 bg-StrongPink py-10 rounded-r-lg drop-shadow-md">
                    <div className="w-full h-full flex flex-col justify-evenly gap-2 items-center">
                        <NavLink to={"/"} className="navigation-links p-3" ><img alt={""} src={`${uwu}`}/></NavLink>
                        <NavLink to={`/profile/${userID}`} className="navigation-links"><img alt={""} src={`${myProfile}`}/></NavLink>
                        <NavLink to={"/news"} className="navigation-links"><img alt={""} src={`${news}`}/></NavLink>
                        <NavLink to={"/messages"} className="navigation-links"><img alt={""} src={`${sendMessege}`}/></NavLink>
                        <NavLink to={"/friends"} className="navigation-links"><img alt={""} src={`${friends}`}/></NavLink>
                        <NavLink to={"/groups"} className="navigation-links"><img alt={""} src={`${myGroups}`}/></NavLink>
                        <button onClick={() => {
                            authorizationStore.Logout()
                        }}>Logout
                        </button>
                    </div>
                </div>

            </header>

            <Notification/>

        </>
    );

}
export default Navigation