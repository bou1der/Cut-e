import avatar from "./resource/photo_2023-10-03_09-31-43 1.png";
import upload from "./resource/upload-svgrepo-com.svg";
import editPen from "./resource/edit-pen-2-line-svgrepo-com 1.svg";
import activity from "./resource/activity.svg";
import info from "./resource/info-circle-svgrepo-com 1.svg";
import inviteFriend from "./resource/add-friend-basic-outline-svgrepo-com 1.svg";
import {JSX} from "react";

const UserHeader = ({setModal}:{setModal:useState}):JSX.Element =>{
    return (
        <div
            className="bg-StrongPink w-full xl:h-64 text-MainTextColor font-MainFont grid grid-cols-1 grid-rows-2 rounded-t-lg rounded-b-2sm">
            <div className="relative row-span-2 group"
                onClick={()=>{
                    setModal(true)
                }}
            >
                <img className="w-full h-full bg-center bg-cover bg-no-repeat rounded-t-sm absolute background-profile transition duration-700 group-hover:brightness-75" style={{backgroundImage: 'url("https://sun9-77.userapi.com/impg/rB6krK8yIZweOxnxRQAb3OlJM7HOI1Cj_zkubQ/smSi0KZmvAs.jpg?size=960x384&quality=95&crop=0,138,1280,512&sign=e18f70e622bb2153fe990b6ae2ac9ebc&c_uniq_tag=-lz3ducesYoYdjZlmiPxT2RIOYNp6_gTJDf-kZ17s2E&type=helpers")'}} src={""} alt=""/>
                <div className="w-full h-full flex items-center z-10 relative justify-center">
                    <div className="relative group/avatar"
                         onClick={()=>{
                             setModal(true)
                         }}
                    >
                        <img className="xl:w-40 rounded-full transition group-hover/avatar:brightness-75" src={avatar} alt=""/>
                        <label className="absolute w-full h-full top-0 opacity-0 transition duration-500 group-hover/avatar:opacity-70 flex items-center justify-center cursor-pointer"><img className="w-5/12" src={`${upload}`} alt=""/></label>
                    </div>
                </div>
                <label className="absolute top-2.5 right-2.5 p-2 bg-White bg-opacity-25 rounded-full edit-bg opacity-0 transition-opacity duration-500 group-hover:opacity-100"><img src={`${editPen}`} alt=""/></label>
            </div>
            <div className="flex flex-row justify-between py-1.5 shrink">
                <span className="flex flex-row items-end gap-5 pl-5">
                    <h2 className="xl:text-30">User_name</h2>
                    <span className="flex items-center gap-1.5"><div><img className="pb-0.5" src={`${activity}`} alt=""/></div><p className="xl:text-20 leading-8">activity</p></span>
                    <span className="flex items-center gap-1"><img className="h-full" src={`${info}`} alt=""/><p className="xl:text-18 leading-8">info</p></span>
                </span>
                <span className="flex flex-row items-center gap-5 pr-5">
                    <label className="bg-CreamPink p-1.5 rounded-2sm hover-button"><img className="h-7 w-7" src={`${inviteFriend}`} alt=""/></label>
                    <label className="text-18 bg-CreamPink py-1.5 px-7 rounded-sm hover-button">More</label>
                    <label className="text-18 bg-CreamPink py-1.5 px-8 rounded-sm  hover-button">Send message</label>
                </span>
            </div>
        </div>
    )
}
export default UserHeader