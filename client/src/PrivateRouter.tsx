import {ReactNode,useEffect} from "react"
import {} from "react-router"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import AuthStore from "./stores/authorization-store.ts"
import CheckerRouter from "./router/RouterAuthChecker.tsx";

// components
import Sign from "./components/sign-up-in/Sign.tsx"
// components
const PrivateRouter = ():ReactNode =>{
    useEffect(() => {
        console.log(AuthStore.isAuth)
    }, [AuthStore.isAuth]);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<div>Основная ссылка</div>}/>
                    <Route path={"/authorization"} element={<Sign/>}/>
                    <Route path={"/messages"} element={<CheckerRouter AuthStore={AuthStore}/>}>
                        <Route path={""}/>
                    </Route>
                    <Route path={"*"} element={<div>Not Found</div>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default PrivateRouter