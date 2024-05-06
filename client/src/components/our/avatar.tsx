import {profile} from "../../types/axios-response-types.ts";

const UserAvatar =({prop}:{prop:profile | null}) =>{
    console.log(prop)
    return(
        <>
            <img className={"w-44 rounded-sm"} src={prop?.avatar || "https://storage.yandexcloud.net/test-cloud-boulder/ead6b826-0ebd-4812-9ec1-42a9c7abc076"} alt=""/>
        </>
    )
}
export default UserAvatar