import avatar from "./resource/photo_2023-10-03_09-31-43 1.png";
import upload from "./resource/upload-svgrepo-com.svg";
import editPen from "./resource/edit-pen-2-line-svgrepo-com 1.svg";
import activity from "./resource/activity.svg";
import info from "./resource/info-circle-svgrepo-com 1.svg";
import inviteFriend from "./resource/add-friend-basic-outline-svgrepo-com 1.svg";

import {JSX} from "react";
import {profile} from "../../types/axios-response-types.ts";
import messageStore from "../../stores/message-store.ts";
import {newChat} from "../../handlers/messages-request-handler.ts";
import {useNavigate} from "react-router-dom";

import {chat} from "../../types/axios-response-types.ts"
import socketEventsStore from "../../stores/socket-events-store.ts";

const UserHeader = ({setModal,props}:{setModal:useState,props:profile}):JSX.Element =>{
    const navigate = useNavigate()
    return (
        <div
            className="bg-StrongPink w-full xl:h-64 text-MainTextColor font-MainFont grid grid-cols-1 grid-rows-2 rounded-t-lg rounded-b-2sm">
            <div className="relative row-span-2 group"
            >
                <div className="w-full h-full flex items-center z-10 relative justify-center">
                    <div className="relative group/avatar"
                         onClick={() => {
                             setModal("avatar")
                         }}>
                        <img className="xl:w-40 xl:h-40 rounded-full transition group-hover/avatar:brightness-75"
                             src={`${props.avatar || "https://storage.yandexcloud.net/test-cloud-boulder/ead6b826-0ebd-4812-9ec1-42a9c7abc076"}`}
                             alt=""/>
                        <label
                            className="absolute w-full h-full top-0 opacity-0 transition duration-500 group-hover/avatar:opacity-70 flex items-center justify-center cursor-pointer">
                            <img className="w-5/12" src={`${upload}`} alt=""/>
                        </label>
                    </div>
                </div>
                <img
                    className="w-full h-full bg-center bg-cover bg-no-repeat rounded-t-sm absolute top-0 left-0 background-profile transition duration-700 group-hover:brightness-75 group"
                    style={{backgroundImage: props?.background ? 'url(' + `${props.background}` + ')' : `url('https://storage.yandexcloud.net/test-cloud-boulder/46fbabda-b100-479f-8414-cd8cd91de369')`}}
                    src={""} alt=""
                />

                <label
                    onClick={()=>{
                        setModal("background")
                    }}
                    className="absolute top-2.5 right-2.5 p-2 bg-White bg-opacity-80 rounded-full edit-bg opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"><img
                    src={`${editPen}`} alt=""/>
                </label>
            </div>
            <div className="flex flex-row justify-between py-1.5 shrink">
                <span className="flex flex-row items-end gap-5 pl-5">
                    <h2 className="xl:text-30">{props.name}</h2>
                    <span className="flex items-center gap-1.5"><div><img className="pb-0.5" src={`${activity}`}
                                                                          alt=""/></div><p
                        className="xl:text-20 leading-8">activity</p></span>
                    <span className="flex items-center gap-1"><img className="h-full" src={`${info}`} alt=""/><p
                        className="xl:text-18 leading-8">info</p></span>
                </span>
                <span className="flex flex-row items-center gap-5 pr-5">
                    <label className="bg-CreamPink p-1.5 rounded-2sm hover-button"><img className="h-7 w-7"
                                                                                        src={`${inviteFriend}`} alt=""/></label>
                    <label className="text-18 bg-CreamPink py-1.5 px-7 rounded-sm hover-button">More</label>
                    <label className="text-18 bg-CreamPink py-1.5 px-8 rounded-sm  hover-button"
                        onClick={async ()=>{
                            const res =await  newChat(props.UID)
                            if (res.id){

                            }
                            messageStore.selectChat(res.id)
                            navigate('/messages')


                        }}
                    >Send message</label>
                </span>
            </div>
        </div>
    )
}
export default UserHeader