import {JSX, useState} from "react"
import UserHeader from "./User-Profile-Header.tsx";
import ProfileNavigation from "./ProfileNavigation.tsx";
import {useParams} from "react-router";
import UploadImagesModal from "./Upload-Images-Modal.tsx";

const ProfilePage = ():JSX.Element =>{
    console.log(useParams())
    const [modalState,setModalState] = useState(true)
    return(
        <>
            {modalState && <UploadImagesModal setModal={setModalState} modalState={modalState}/>}
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="relative xl:w-9/12 xl:h-4/5 bg-White inner-shadow rounded-sm overflow-y-scroll scrollbar-hide p-6">
                    <UserHeader setModal={setModalState}/>

                    <ProfileNavigation/>
                </div>
            </div>
        </>
    )
}

export default ProfilePage