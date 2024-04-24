import {makeAutoObservable, makeObservable} from "mobx"
import {login,logout,register,refresh} from "../handlers/authorization-request-handler"

interface AuthStoreInterface{
    isAuth:boolean
    isAuthProgress:boolean
    Login(login:string,password:string):void
    Register(nickname:string,login:string,password:string):void
    CheckAuth():void
    Logout():void
}

class AuthorizationStore implements AuthStoreInterface{

    isAuth = false
    isAuthProgress = false
    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
    }
    async Login(loginValue: string, passwordValue: string) {
        this.isAuthProgress = true
        try {
            this.isAuth = true
            return
            const res = await login(loginValue,passwordValue)
            localStorage.setItem('access',res.data.tokens.access)
            this.isAuth = true
        }catch (err){
            console.log(err)
        }finally {
            this.isAuthProgress = false
        }
    }
    async Register(nicknameValue: string, loginValue: string, passwordValue: string) {
        this.isAuthProgress = true
        try {
            this.isAuth = true
            return
            const res = await register(nicknameValue,loginValue,passwordValue)
            localStorage.setItem('access',res.data.tokens.access)
            this.isAuth = true
        }catch (err){
            console.log(err)
        }finally {
            this.isAuthProgress = false
        }
    }
    async CheckAuth() {
        this.isAuthProgress = true
        try {
            this.isAuth = true
            return
            const res = await refresh()
            localStorage.setItem('access',res.data.tokens.access)
            this.isAuth = true
        }catch (err){
            console.log(err)
        }finally {
            this.isAuthProgress = false
        }
    }
    async Logout() {
        this.isAuthProgress = true
        try {
            await logout()
            localStorage.removeItem('access')
            this.isAuth = false
        }catch (err){
            console.log(err)
        }finally {
            this.isAuthProgress = false
        }
    }

}

export default new AuthorizationStore()
export type {AuthStoreInterface}