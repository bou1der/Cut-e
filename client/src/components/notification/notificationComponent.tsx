import logo from "./resource/user_logo_noborder.svg"
import messageSvg from "./resource/message-square-notification-svgrepo-com 1.svg"

import notificationStore from "../../stores/notification-store.ts";
import {Component, ReactNode, useEffect} from "react";
import {GetTextMessage} from "../../stores/socket-events-store.ts";
const NotificationElement = ({uuid,message}:{uuid:string,message:GetTextMessage}):ReactNode =>{
    console.log(message)
    useEffect(() => {
        const pop = document.getElementById(`${uuid}`)
        if (pop){
            pop.style.transition = "opacity 0.4s linear"
            pop.style.opacity = '1'
            const timeOut = setTimeout(()=>{
                pop.style.transition = "opacity 1.5s linear"
                pop.style.opacity = '0'
            },1000)
            const timeouid = setTimeout(()=>{
                notificationStore.clearNotify()
            },2500)
        }
    }, []);
    return(
        <>
            <div className="pop-notificate" id={uuid}>
                    <span className="pop-values">
                        <img src={logo} alt="" className="pop-logo"/>
                        <div>
                            <h3>{message.chat.name}</h3>
                            <span><img src={messageSvg} alt=""/><p>{message.message.text}</p></span>
                        </div>
                    </span>
            </div>
        </>
    )
}
export default NotificationElement