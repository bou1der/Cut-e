import {JSX,useState} from "react";
import avatar from "./resource/photo_2023-10-03_09-31-43 1.png";
const UploadImagesModal = ({setModal}:{setModal:useState}):JSX.Element =>{

    return (
        <>
            <div className="w-full h-full z-20 absolute flex items-center justify-center">
                <div className="xl:w-6/12 xl:h-1/2 bg-StrongPink animate-transform-appeared z-30 absolute rounded-sm font-MainFont flex flex-col">
                    <div className="w-full grow flex flex-col">

                        <img className="w-7/12 h-52 bg-contain bg-no-repeat bg-top" style={{backgroundImage: 'url("https://sun9-77.userapi.com/impg/rB6krK8yIZweOxnxRQAb3OlJM7HOI1Cj_zkubQ/smSi0KZmvAs.jpg?size=960x384&quality=95&crop=0,138,1280,512&sign=e18f70e622bb2153fe990b6ae2ac9ebc&c_uniq_tag=-lz3ducesYoYdjZlmiPxT2RIOYNp6_gTJDf-kZ17s2E&type=helpers")'}} src="" alt=""/>

                        <img className="max-w-36" src={avatar} alt=""/>
                    </div>
                    <div>
                        <span><input type="checkbox" name="" id=""/></span>
                    </div>
                </div>


                <div className="w-full h-full z-20 absolute top-0 left-0 bg-Black bg-opacity-40 animate-from-shadow" onClick={() => {setModal(false)}}></div>
            </div>
        </>
    )
}
export default UploadImagesModal