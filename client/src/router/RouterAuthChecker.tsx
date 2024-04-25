import {useEffect} from "react";
import {observer } from "mobx-react-lite";
import {Navigate, Outlet} from "react-router-dom";
import authorizationStore from "../stores/authorization-store.ts";

const CheckerRouter = ({}) =>{


    useEffect(() => {
        authorizationStore.CheckAuth()
    }, []);

    if (authorizationStore.isAuthProgress){
        return <div>///Loading///</div>
    }
    if (authorizationStore.isAuth){
        return <Outlet/>
    }else {
        return <Navigate to={"/authorization"}/>
    }
}
export default observer(CheckerRouter)