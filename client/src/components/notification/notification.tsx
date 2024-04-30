import {Component, ReactNode, useEffect} from "react";
import {observer} from "mobx-react-lite";

import notificationStore from "../../stores/notification-store.ts";

// import "tailwindcss/tailwind.css"
import "./notification.css"
import NotificationElement from "./notificationComponent.tsx"



const Notification = observer(():ReactNode =>{

    return (
        <>
            <div className="notification-area">
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