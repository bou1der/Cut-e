import {ChangeEvent, JSX, useState} from "react";
import {uploadAvatarImage,uploadBackgroundImage} from "../../handlers/profiles-request-handlers.ts";
import { profile } from "../../types/axios-response-types.ts";
import uploadImg from "./resource/upload-svgrepo-com.svg";
import UserAvatar from "../our/avatar.tsx";
import UserBackground from "../our/background.tsx";
// import avatar from "./resource/photo_2023-10-03_09-31-43 1.png";

const UploadImagesModal = ({setModal,prop,modal}:{setModal:useState,prop:profile | null,modal:string}):JSX.Element =>{
    const [image, setImage] = useState<File | null>(null)
    console.log(modal)
    return (
        <>
            <div className="w-full h-full z-50 absolute flex items-center justify-center">
                <div className="xl:w-6/12 xl:h-2/3 bg-StrongPink animate-transform-appeared z-30 absolute rounded-sm font-MainFont flex flex-col">
                    <div className="w-full grow flex flex-col items-center justify-center gap-10">
                        {modal === "avatar" ? <UserAvatar prop={prop}/> : <UserBackground prop={prop}/>}
                        <label htmlFor="avatar-file-input" className="w-4/5 h-52 rounded-lg border-dotted border-White border-4 bg-Black bg-opacity-5 flex items-center justify-center cursor-pointer group hover:bg-opacity-15">
                            <img className="h-2/3 transition duration-500 transform group-hover:-translate-y-2" src={`${uploadImg}`} alt="" />
                        </label>
                        <input id="avatar-file-input" type="file" className="hidden"
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const files = event.currentTarget.files
                                if (files)
                                    setImage(files[0])
                            }}
                        />
                    </div>
                    <div className={"flex flex-row justify-end items-end xl:w-4/5 mx-auto mb-4"}>
                        <span className={"flex flex-row mr-3"}><input type="checkbox" className={"mr-2 group"} name="" id=""/><p className={"text-14"}>Я ознакомился с правилами загрузки изображений </p></span>
                        <button className=" w-32 h-12 bg-CreamPink rounded-sm" onClick={()=>{
                            if (image){
                                modal === "avatar" ? uploadAvatarImage(image) : uploadBackgroundImage(image);
                            }
                        }}>Сохранить</button>
                    </div>
                </div>


                <div className="w-full h-full z-20 absolute top-0 left-0 bg-Black bg-opacity-40 animate-from-shadow"
                     onClick={() => {setModal('')}}></div>
            </div>
        </>
    )
}
export default UploadImagesModal