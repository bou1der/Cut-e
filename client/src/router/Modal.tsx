import {useCallback,useRef,useEffect,useState,MouseEventHandler} from "react";
import Portal,{CreatContainer} from "./Portal.tsx";
import {ReactNode} from "react";

const modal_container_id = "modal-window"
type Props = {children:ReactNode | ReactNode[],onClose?:()=>void}

const Modal = (props:Props) =>{
    const {children,onClose} = props
    const rootRef = useRef<HTMLDivElement>(null)
    const [isMounted,setMounted] = useState<boolean>(false)
    useEffect(() => {
        CreatContainer({id:modal_container_id})
        setMounted(true)
    }, []);
    useEffect(() => {
        const handleWrapClick = (event:MouseEvent) =>{
            const {target} = event
            if (target instanceof Node && rootRef.current === target){
                onClose?.();
            }
        }
        const handleEscapePress = (event:KeyboardEvent) =>{
            if (event.key === "Escape"){
                onClose?.()
            }
        }
            window.addEventListener('click', handleWrapClick)
            window.addEventListener('keydown',handleEscapePress)
        return () =>{
            window.removeEventListener('click',handleWrapClick)
            window.removeEventListener('keydown',handleEscapePress)

        }
    }, [onClose]);
    // const handleClose: MouseEventHandler<
    //     HTMLDivElement | HTMLButtonElement
    // > = useCallback(() => {
    //     onClose?.();
    // }, [onClose]);

    return isMounted
            ?   (
                    <Portal id={modal_container_id}>
                        <div
                            className="w-full h-full fixed top-0 flex items-center justify-center z-40 bg-Black bg-opacity-20"
                            ref={rootRef}
                            data-typeid="modal-wrap-container"
                        >
                            {children}
                        </div>
                    </Portal>
                )
            : null
}

export default Modal