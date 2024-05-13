import upload from "./resource/upload-svgrepo-com.svg";
import editPen from "./resource/edit-pen-2-line-svgrepo-com 1.svg";
import activity from "./resource/activity.svg";
import info from "./resource/info-circle-svgrepo-com 1.svg";
import inviteFriend from "./resource/add-friend-basic-outline-svgrepo-com 1.svg";
import postCreate from "./resource/pen-square-svgrepo-com.svg"
import settingsSVG from "./resource/settings-svgrepo-com 1.svg"
import arrowLeftSVG from "./resource/arrow-left-svgrepo-com 1.svg"

import {JSX, useEffect, useRef, useState} from "react";
import {profile} from "../../types/axios-response-types.ts";
import messageStore from "../../stores/message-store.ts";
import {newChat} from "../../handlers/messages-request-handler.ts";
import {useNavigate} from "react-router-dom";

import {chat} from "../../types/axios-response-types.ts"
import socketEventsStore from "../../stores/socket-events-store.ts";
import {useParams} from "react-router";
import api from "../../service/axios.ts";
import Modal from "../../router/Modal.tsx";
import TextAreaAutoSize from "../our/textAreaAutoSize.tsx";
import Carousel from "../our/carousel.tsx";


// const test = (scrollBlock,profileHeaderEvent) =>{
//
// }
const UserHeader = ({setModal,props}:{setModal:useState,props:profile}):JSX.Element => {

    const [profileState, setProfileState] = useState<boolean>()
    const [postModalState, setPostModalState] = useState<boolean>(false)
    const [postInputValue,setPostInputValue] = useState<string>('')
    const [imagesPostUpload,setImagesPostUpload] = useState<File[]>([])
    const UID = useParams().id
    const navigate = useNavigate()

    useEffect(() => {
        setProfileState(!(Number(UID) === messageStore.userId))
    }, [UID]);

    const handlePostModalClose = () =>{
        setPostModalState(false)
    }
    const handlePostModalOpen = () =>{
        setPostModalState(true)
    }
    return (
        <>
            <div className="sticky xl:-top-56">
                <div
                    className="z-20 relative bg-StrongPink w-full xl:h-64 text-MainTextColor font-MainFont grid grid-cols-1 grid-rows-2 rounded-t-lg rounded-b-2sm "
                >
                    <div
                        className={`relative row-span-2 ${profileState || "group"}`}
                    >
                        <div className="w-full h-full flex items-center z-10 relative justify-center">
                            <div className={`relative ${profileState || "group/avatar"}`}
                                 onClick={() => {
                                     if (profileState) return
                                     setModal("avatar")
                                 }}>
                                <img
                                    className="xl:w-40 xl:h-40 rounded-full transition group-hover/avatar:brightness-75"
                                    src={`${props.avatar}`}
                                    alt=""/>
                                <label
                                    className="absolute w-full h-full top-0 opacity-0 transition duration-500 group-hover/avatar:opacity-70 flex items-center justify-center cursor-pointer">
                                    <img className="w-5/12" src={`${upload}`} alt=""/>
                                </label>
                            </div>
                        </div>
                        <img
                            className="w-full h-full bg-center bg-cover bg-no-repeat rounded-t-sm absolute top-0 left-0 background-profile transition duration-700 group-hover:brightness-75 group"
                            style={{backgroundImage: `url(${props.background})`}}
                            src={""} alt=""
                        />

                        <label
                            onClick={() => {
                                if (profileState) return
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
                        {
                            profileState &&
                            <label className="bg-CreamPink p-1.5 rounded-2sm hover-button"><img className="h-7 w-7" src={`${inviteFriend}`} alt=""/></label>
                        }
                            <label className="text-18 bg-CreamPink py-1.5 px-7 rounded-sm hover-button">More</label>
                            {
                                profileState &&
                                <label className="text-18 bg-CreamPink py-1.5 px-8 rounded-sm  hover-button"
                                       onClick={async () => {
                                           const res = await newChat(props.UID)
                                           if (res.id) {

                                           }
                                           messageStore.selectChat(res.id)
                                           navigate('/messages')


                                       }}
                                >Send message</label>
                            }
                    </span>
                    </div>
                </div>
                <label datatype="drop-button-create-post"
                       className='absolute w-12 h-20 min-h-20 bg-CreamPink -bottom-6 left-6 z-10 rounded-b-2sm transition-transform hover:translate-y-10'
                       onClick={handlePostModalOpen}
                >
                    <img className="w-3/4 mx-auto mt-6" src={`${postCreate}`} alt=""/>
                </label>
                {postModalState && (
                    <Modal onClose={handlePostModalClose}>
                        <div
                            data-typeid="modal-post-create"
                            className="xl:w-8/12 xl:h-2/3 bg-StrongPink animate-transform-appeared z-30 absolute rounded-sm font-MainFont flex flex-col justify-between py-5">
                            <div>
                                <div className="px-20 grid grid-cols-[0.1fr_0.8fr_0.1fr] items-start">
                                    <img className="w-16 rounded-full justify-self-center" src={`${props.avatar}`}
                                         alt=""/>
                                    <TextAreaAutoSize
                                        style={"text-MainTextColor text-18  w-full mt-2.5 min-h-11 max-h-64 rounded-sm bg-CreamPink focus:outline-none px-6 py-2.5 resize-none scrollbar-hide"}
                                        Values={[postInputValue, setPostInputValue]}
                                    />
                                    <label className="justify-self-center mt-4"><img src={`${settingsSVG}`}
                                                                                     alt=""/></label>
                                </div>
                                <div className="h-40">
                                    <Carousel uploads={{
                                        imagesValue: imagesPostUpload,
                                        imagesUploadHandler: setImagesPostUpload
                                    }}>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="w-full flex justify-end px-20 ">
                                <label className="px-6 py-2 bg-CreamPink rounded-sm hover-button text-MainTextColor font-MainFont">Опубликовать</label>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </>
    )
}
export default UserHeader