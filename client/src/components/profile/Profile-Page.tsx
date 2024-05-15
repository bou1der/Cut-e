import {JSX, useEffect, useState} from "react"
import UserHeader from "./User-Profile-Header.tsx";
import ProfileNavigation from "./ProfileNavigation.tsx";
import {useParams} from "react-router";
import UploadImagesModal from "./Upload-Images-Modal.tsx";
import {post, profile} from "../../types/axios-response-types.ts";
import {getProfile} from "../../handlers/profiles-request-handlers.ts";
import Post from "../our/Post.tsx";

const ProfilePage = ():JSX.Element =>{
    const id = useParams().id
    const [profile,setProfile] = useState<(profile & {posts:post[]}) | null>(null)
    // const arr = new Array(5)

    useEffect(()=>{
        const fetch = async () =>{
            const res = await getProfile(Number(id))
            if (!res.avatar){
                res.avatar = "https://storage.yandexcloud.net/test-cloud-boulder/ead6b826-0ebd-4812-9ec1-42a9c7abc076"
            }
            if (!res.background){
                res.background = "https://storage.yandexcloud.net/test-cloud-boulder/46fbabda-b100-479f-8414-cd8cd91de369"
            }
            setProfile(res)
        }
        fetch()
    },[id])

    const [modalState,setModalState] = useState('')
    return(
        <>
            {modalState && <UploadImagesModal setModal={setModalState} modal={modalState} prop={profile} />}
            <div className="w-screen h-screen flex items-center justify-center">
                <div id={"scroll-profile"} className="relative xl:w-9/12 xl:h-4/5 bg-White inner-shadow rounded-sm overflow-y-scroll scrollbar-hide p-6">
                    {
                        profile &&
                            <UserHeader setModal={setModalState} props={profile}/>
                    }
                    {
                        profile?.posts.map((post) =>{

                            return <Post props={post}/>
                        })
                    }
                    <ProfileNavigation/>
                </div>
            </div>
        </>
    )
}

export default ProfilePage