import {Component, ReactNode, useEffect} from "react";
import {observer} from "mobx-react-lite";

import notificationStore from "../../stores/notification-store.ts";

// import "./notification.css"
import NotificationElement from "./notificationComponent.tsx"



const Notification = observer(():ReactNode =>{

    return (
        <>
            <div className="absolute z-20 flex flex-col gap-4 right-5 top-5">
                {

                            notificationStore.GetNotifications().map((message)=>{
                                return <NotificationElement uuid={Math.random().toString()} message={message}/>

                            })

                }
            </div>
        </>
    )
})

export default Notification