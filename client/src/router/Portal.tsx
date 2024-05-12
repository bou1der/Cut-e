import {ReactNode, useEffect, useState} from "react";
import {createPortal} from "react-dom";

type Props = {id:string; children:ReactNode};

const msg = "Сообщение об ошибке 228";

const Portal = (props:Props) =>{
    const [container,setContainer] = useState<HTMLElement>();
    const {id,children} = props;
    useEffect(() => {
        if (id){
            const portalContainer = document.getElementById(id);
            if (!portalContainer){
                throw new Error(msg);
            }
            setContainer(portalContainer);
        }
    }, [id]);
    return container ? createPortal(children,container) : null
}

type containerOptions = {id:string;mountElement?:HTMLElement}

const CreatContainer =  ( options:containerOptions ) =>{
    if (document.getElementById(options.id)){
        return;
    }

    const {id,mountElement = document.body } = options
    const portalContainer = document.createElement('div')
    portalContainer.setAttribute('id',id)
    // portalContainer.classList.value = "w-full h-full absolute"
    mountElement.appendChild(portalContainer)
}

export {CreatContainer,msg}
export default Portal