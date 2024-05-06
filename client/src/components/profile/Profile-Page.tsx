import {JSX, useEffect, useState} from "react"
import UserHeader from "./User-Profile-Header.tsx";
import ProfileNavigation from "./ProfileNavigation.tsx";
import {useParams} from "react-router";
import UploadImagesModal from "./Upload-Images-Modal.tsx";
import {profile} from "../../types/axios-response-types.ts";
import {getProfile} from "../../handlers/profiles-request-handlers.ts";

const ProfilePage = ():JSX.Element =>{
    const id = useParams().id
    const [profile,setProfile] = useState<profile | null>(null)
    useEffect(()=>{
        const fetch = async () =>{
            const res = await getProfile(Number(id))
            setProfile(res)
        }
        fetch()
    },[id])
    const [modalState,setModalState] = useState('')
    return(
        <>
            {modalState && <UploadImagesModal setModal={setModalState} modal={modalState} prop={profile} />}
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="relative xl:w-9/12 xl:h-4/5 bg-White inner-shadow rounded-sm overflow-y-scroll scrollbar-hide p-6">
                    {
                        profile &&
                            <UserHeader setModal={setModalState} props={profile}/>
                    }

                    <ProfileNavigation/>
                </div>
            </div>
        </>
    )
}

export default ProfilePage