import {ReactNode} from "react"
import {} from "react-router"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import AuthStore from "./stores/authorization-store.ts"
import CheckerRouter from "./router/RouterAuthChecker.tsx";
const PrivateRouter = ():ReactNode =>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<div>Основная ссылка</div>}/>
                    <Route path={"/authorization"} element={<div>Auth</div>}/>
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