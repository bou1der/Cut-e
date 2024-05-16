import arrowLeftSVG from "../profile/resource/arrow-left-svgrepo-com 1.svg";
import uploadSVG from "./resource/upload-svgrepo-com.svg"
import React, {ChangeEvent, ReactNode, useEffect, useState,useRef} from "react";


type Props = {children?:ReactNode | ReactNode[],uploads?:{imagesValue:File[],imagesUploadHandler:React.Dispatch<React.SetStateAction<File[]>>}}
const Carousel = (props:Props) =>{
    const {children,uploads} = props
    const [tempImages,setTempImages] = useState<string[]>([])
    const carousel = useRef<HTMLDivElement | null>(null)
    const parent = useRef<HTMLDivElement | null>(null)
    let currentScroll = useRef(0)
    const handleInputImagesChange = (event:ChangeEvent<HTMLInputElement>) =>{
        if (uploads && event.currentTarget.files){
            uploads.imagesUploadHandler([...uploads.imagesValue,event.currentTarget.files[0]])
        }
    }

    return(
        <>
            <div className="h-full grid grid-cols-[0.1fr_0.8fr_0.1fr] items-center ">
                <label className="justify-self-center"><img src={`${arrowLeftSVG}`} alt=""
                    onClick={()=>{

                        if (!parent.current){
                            return console.log("err")
                        }
                        if (currentScroll.current > 0){
                            currentScroll.current--
                        }
                        const position = (currentScroll.current * 164)
                        return carousel.current?.scrollTo(position,0)
                    }}
                /></label>
                <div className="h-full overflow-x-scroll scroll-smooth rounded-lg scrollbar-hide relative" ref={carousel}>
                    <div className="h-full flex flex-row gap-5 items-center absolute" ref={parent} >
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
                                    <div className="xl:h-36 xl:w-36 flex items-center justify-center grow shrink-0">
                                        <input type="file" id="upload-post-images" className="hidden" onChange={handleInputImagesChange}/>
                                        <label className="p-2 border-4 border-White border-dotted rounded-sm" htmlFor="upload-post-images"><img className="w-14" src={`${uploadSVG}`} alt=""/></label>
                                    </div>
                                </>
                        }
                    </div>
                </div>
                {
                    // parent.current &&
                    // parent.current?.children.length > 4 ?
                        <label className="justify-self-center"><img className="rotate-180" src={`${arrowLeftSVG}`} alt=""
                            onClick={() => {

                                if (!parent.current) {
                                    return console.log("err")
                                }
                                if (currentScroll.current < parent.current?.children.length - 3) {
                                    currentScroll.current++
                                }
                                console.log(currentScroll)
                                const position = (currentScroll.current * 164)
                                return carousel.current?.scrollTo(position, 0)
                            }}
                        /></label>
                        // :
                        // null
                }
            </div>
        </>
    )
}
export default Carousel