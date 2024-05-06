import addFriend from "./resource/add-friend-basic-outline-svgrepo-com 1.svg"
import {profile} from "../../types/axios-response-types.ts";
import {Link} from "react-router-dom";
const UserProfileFound = ({prop}:{prop:profile}) =>{
    console.log(prop)
    return(
        <>
            <div className="w-full h-24 rounded-sm relative bg-cover bg-no-repeat bg-center overflow-hidden mb-6" style={{backgroundImage:"url("+`${prop?.background || "https://storage.yandexcloud.net/test-cloud-boulder/46fbabda-b100-479f-8414-cd8cd91de369"}`+")"}}>
                <div className="w-full h-full flex items-center justify-between px-8 bg-gradient-to-r from-CreamPink to-95%">
                    <Link to={`/profile/${prop.UID}`} className="flex flex-row gap-3">
                        <img className="w-16 h-16 relative rounded-lg" src={prop.avatar || "https://storage.yandexcloud.net/test-cloud-boulder/ead6b826-0ebd-4812-9ec1-42a9c7abc076"} alt="" />
                        <h2 className="text-MainTextColor xl:text-30 font-semibold">{prop.name}</h2>
                    </Link>
                    <button className="p-2 bg-StrongPink rounded-sm hover:bg-CreamPink transition-colors"><img className="w-8 h-8" src={`${addFriend}`} alt="" /></button>
                </div>
            </div>
        </>
    )
}

export default UserProfileFound