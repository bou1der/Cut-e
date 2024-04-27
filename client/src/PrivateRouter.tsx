import {useEffect} from "react"
import {Route,Routes,BrowserRouter,NavLink} from "react-router-dom"
import AuthStore from "./stores/authorization-store.ts"
import CheckerRouter from "./router/RouterAuthChecker.tsx";

import SignPage from "./components/sign-up-in/Sign.tsx"
import NavigatePanel from "./components/NavigatePanel/NavBar.tsx"


import {observer} from "mobx-react-lite"
import SocketStore from "./stores/socket-events-store.ts";
import { fetchChats } from "./handlers/messages-request-handler.ts";
import messageStore from "./stores/message-store.ts";

const PrivateRouter = observer(() =>{

    useEffect(() => {
        const fetch = async () :Promise<void> =>{
            await AuthStore.CheckAuth()
            // SocketStore.connect()
            messageStore.fetchChats()
        }
        fetch()
    }, [/*AuthStore.isAuth*/]);

    return (
        <>
            <>
                {
                    AuthStore.isAuthProgress ?
                        <h1>///loading///</h1>
                        :
                        <BrowserRouter>
                            {!AuthStore.isAuth || <NavigatePanel/>}
                            <Routes>
                                <Route path={"/"} element={<div>Основная ссылка</div>}/>
                                {AuthStore.isAuth || <Route path={"/authorization"} element={<SignPage/>}/> }
                                <Route path={"/profile"} element={<CheckerRouter/>}>
                                    <Route path={""} element={<h1>Профиль</h1>}/>
                                </Route>
                                <Route path={"/news"} element={<CheckerRouter/>}>
                                    <Route path={""} element={<h1>Новости</h1>}/>
                                </Route>
                                <Route path={"/messages"} element={<CheckerRouter/>}>
                                    <Route path="" element={<button style={{position:"absolute",right:"0px"}} onClick={() => fetchChats()}>Fetch</button>}/>
                                </Route>
                                <Route path={"/friends"} element={<CheckerRouter/>}>
                                    <Route path="" element={<div>Твои друзья(Если они есть)</div>}/>
                                </Route>
                                <Route path={"/groups"} element={<CheckerRouter/>}>
                                    <Route path="" element={<div>Группы</div>}/>
                                </Route>
                                <Route path={"*"} element={<h1>///NotFound///</h1>}/>
                            </Routes>
                        </BrowserRouter>
                }
            </>
        </>
    )
})
export default PrivateRouter