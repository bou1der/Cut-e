import {} from "react"
import {Route,Routes,BrowserRouter, Navigate,NavLink} from "react-router-dom"
import AuthStore from "./stores/authorization-store.ts"
import CheckerRouter from "./router/RouterAuthChecker.tsx";

import SignPage from "./components/sign-up-in/Sign.tsx"
import NavigatePanel from "./components/NavigatePanel/NavBar.tsx"


import {observer} from "mobx-react-lite"

const PrivateRouter = observer(() =>{
    return (
        <>
            <BrowserRouter>
                {!AuthStore.isAuth || <NavigatePanel/>}
                <Routes>
                    <Route path={"/"} element={<div>Основная ссылка</div>}/>
                    {AuthStore.isAuth || <Route path={"/authorization"} element={<SignPage/>}/> }
                    <Route path={"/profile"} element={<CheckerRouter/>}>
                        <Route path={""} element={<h1>Профиль</h1>}/>
                    </Route>
                    <Route path={"/messages"} element={<CheckerRouter/>}>
                        <Route path="" element={<div>Вы вошли в систему, здесь будет содержимое сообщений</div>}/>
                    </Route>
                    <Route path={"/friends"} element={<CheckerRouter/>}>
                        <Route path="" element={<div>Твои друзья(Если они есть)</div>}/>
                    </Route>
                    <Route path={"/groups"} element={<CheckerRouter/>}>
                        <Route path="" element={<div>Группы</div>}/>
                    </Route>
                    <Route path={"*"} element={<NavLink to={"/messages"}> ссылка</NavLink>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
})
export default PrivateRouter