import {makeAutoObservable, toJS} from "mobx";
import {GetTextMessage} from "./socket-events-store.ts";
class NotificationService {
    public notifications:Array<GetTextMessage> = []


    constructor() {
        makeAutoObservable(this,{},{autoBind:true})
    }
    public GetNotifications(){
        return toJS(this.notifications)
    }
    public MessageNotification(message:GetTextMessage):void{
        this.notifications.push(message)
        // this._handlerNotifications()
    }
    public clearNotify(){
        this.notifications.shift()
    }
}

export default new NotificationService()