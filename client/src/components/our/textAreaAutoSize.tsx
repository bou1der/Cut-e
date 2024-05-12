import React,{useEffect, useRef, useState} from "react";

type Props = {style:string,Values:[value:string,setValue:(targetValue:string)=>void]}
const TextAreaAutoSize = (props:Props) =>{
    const {style,Values} = props
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const t = useState('')
    useEffect(() => {
        if (textAreaRef.current){
            textAreaRef.current.style.height = "0px"
            const scrollHeight = textAreaRef.current.scrollHeight

            textAreaRef.current.style.height = scrollHeight + "px"
        }
    }, [Values[0]]);
    return(
        <>
            {/*<div className="w-full min-h-11">*/}
                <textarea value={Values[0]} onChange={(event) =>Values[1](event.target.value)} className={style} ref={textAreaRef} id=""></textarea>
            {/*</div>*/}
        </>
    )
}

export default TextAreaAutoSize