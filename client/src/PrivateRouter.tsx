import {useEffect} from "react"
import {Route,Routes,BrowserRouter,NavLink} from "react-router-dom"
import AuthStore from "./stores/authorization-store.ts"
import CheckerRouter from "./router/RouterAuthChecker.tsx";

import SignPage from "./components/sign-up-in/Sign.tsx"
import NavigatePanel from "./components/NavigatePanel/NavBar.tsx"
import MessagesPage from "./components/messeges/messegesPage.tsx"


import {observer} from "mobx-react-lite"
import SocketStore from "./stores/socket-events-store.ts";
import MessageStore from "./stores/message-store.ts";
import ProfilePage from "./components/profile/Profile-Page.tsx";
import messageStore from "./stores/message-store.ts";


const PrivateRouter = observer(() =>{

    useEffect(() => {

        const fetch = async () :Promise<void> =>{
            await AuthStore.CheckAuth()
            await MessageStore.fetchChats()
            await SocketStore.connect()
        }
        fetch()
    }, [AuthStore.isAuth]);

    return (
        <>
            <>
                {
                    AuthStore.isAuthProgress ?
                        <h1>///loading///</h1>
                        :
                        <BrowserRouter>
                            {!AuthStore.isAuth || <NavigatePanel userID={messageStore.userId} />}
                            <Routes>
                                <Route path={"/"} element={<div>Основная ссылка</div>}/>
                                {AuthStore.isAuth || <Route path={"/authorization"} element={<SignPage/>}/> }
                                <Route path={"/profile"} element={<CheckerRouter/>}>
                                    <Route path={"/profile/:id"} element={<ProfilePage/>}/>
                                    <Route path={""} element={<h1>///NotFound///</h1>}/>
                                </Route>
                                <Route path={"/news"} element={<CheckerRouter/>}>
                                    <Route path={""} element={<h1>Новости</h1>}/>
                                </Route>
                                <Route path={"/messages"} element={<CheckerRouter/>}>
                                    <Route path="" element={<MessagesPage/>}/>
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