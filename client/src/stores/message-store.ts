import {fetchChats, fetchMessages} from "../handlers/messages-request-handler.ts";
import {makeAutoObservable,toJS} from "mobx";
import {chat, message} from "../types/axios-response-types.ts";

export type currentChat = {
    chat:chat,messages:message[]
}
interface chatsResponse{
    chats:chat[]
    userId:number
    currentChat:currentChat | null
    stateDownloadingMessages:boolean
    _messagesStorage:Map<number,message[]>

    selectChat(id:number):void
    GetChats():chat[]
    GetCurrentChat():currentChat | null

    fetchChats():void
    _fetchMessages(id:number):Promise<message[]>
}

class MessageStore implements chatsResponse{
    public chats:chat[] = []
    public userId:number
    public stateDownloadingMessages:boolean = false

    public currentChat:currentChat | null = null

    _messagesStorage:Map<number,message[]> = new Map(/*Отсюда можно брать localstorage данные*/)
    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
    }
    public GetChats():chat[]{
        return toJS(this.chats)
    }
    public GetCurrentChat():currentChat | null{
        if (this.currentChat !== null){
            return toJS(this.currentChat)
        }
        return null
    }
    public async selectChat(id:number):Promise<void>{
        this.stateDownloadingMessages = true
        try {
            let storage = this._messagesStorage.get(id)
            if (!storage){
                const messages = await this._fetchMessages(id)
                this._messagesStorage.set(id,messages)
                storage = messages
            }
            const [chat] = toJS(this.chats).filter(chat => chat.id === id)
            this.currentChat = {chat,messages:storage}
        }finally {
            this.stateDownloadingMessages = false
        }
    }
    public async  fetchChats(){
        const res = await fetchChats()
        this.chats =  res.chats
        this.userId = res.id
    }
    async _fetchMessages(id:number):Promise<message[]>{
        const res = await fetchMessages(id)
        return res.messages
    }

}

export default new MessageStore()