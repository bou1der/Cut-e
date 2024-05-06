import {profile} from "../../types/axios-response-types.ts";
import "tailwindcss/tailwind.css"
const UserBackground =({prop}:{prop:profile | null}) =>{
    return(
        <>
            <img className="w-4/5 h-48 rounded-md bg-cover bg-center"
                 style={{backgroundImage: "url(" + `${prop?.background || 'https://storage.yandexcloud.net/test-cloud-boulder/46fbabda-b100-479f-8414-cd8cd91de369'}` + ")"}}
                 // src={`${prop?.background || ""}`}
                 alt=""
            />
        </>
    )
}
export default UserBackground