import arrowLeftSVG from "../profile/resource/arrow-left-svgrepo-com 1.svg";
import uploadSVG from "./resource/upload-svgrepo-com.svg"
import React, {ChangeEvent, ReactNode, useEffect, useState} from "react";


type Props = {children?:ReactNode | ReactNode[],uploads?:{imagesValue:File[],imagesUploadHandler:React.Dispatch<React.SetStateAction<File[]>>}}
const Carousel = (props:Props) =>{
    const {children,uploads} = props
    const [tempImages,setTempImages] = useState<string[]>([])
    const handleInputImagesChange = (event:ChangeEvent<HTMLInputElement>) =>{
        if (uploads && event.currentTarget.files){
            uploads.imagesUploadHandler([...uploads.imagesValue,event.currentTarget.files[0]])
        }
    }
    return(
        <>
            <div className="h-52 px-20 grid grid-cols-[0.1fr_0.8fr_0.1fr] items-center ">
                <label className="justify-self-center"><img src={`${arrowLeftSVG}`} alt=""/></label>
                <div className="h-full overflow-x-scroll scrollbar-hide relative">
                    <div className="h-full flex flex-row gap-5 items-center absolute">
                        {children
                            ? children
                            :
                            uploads?.imagesValue &&
                                <>
                                    {
                                        uploads.imagesValue.map((file) => {
                                            return <img className="xl:h-36 xl:w-36 rounded-md" src={URL.createObjectURL(file)} alt=""/>
                                        })
                                    }
                                    <div className="xl:h-36 xl:w-36 flex items-center justify-center grow">
                                        <input type="file" id="upload-post-images" className="hidden" onChange={handleInputImagesChange}/>
                                        <label className=" p-2 border-4 border-White border-dotted rounded-sm" htmlFor="upload-post-images"><img className="w-14" src={`${uploadSVG}`} alt=""/></label>
                                    </div>
                                </>
                        }
                    </div>
                </div>
                <label className="justify-self-center"><img className="rotate-180" src={`${arrowLeftSVG}`} alt=""/></label>
            </div>
        </>
    )
}
export default Carousel