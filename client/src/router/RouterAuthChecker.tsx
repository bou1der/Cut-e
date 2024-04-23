import {ReactNode} from "react";
import {AuthStoreInterface} from "../stores/authorization-store.ts";
import {Navigate, Outlet} from "react-router-dom";
interface test {
    AuthStore:AuthStoreInterface
}
const CheckerRouter = ({AuthStore}:test):ReactNode =>{
    if (AuthStore.isAuthProgress){
        return <div>///Loading///</div>
    }
    if (AuthStore.isAuth){
        return <Outlet />
    }else {
        return <Navigate to={"/authorization"}/>
    }
}
export default CheckerRouter