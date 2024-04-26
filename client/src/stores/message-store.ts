import {fetchChats} from "../handlers/messages-request-handler.ts";

type Chats = []
class MessageStore {
    public chats: Chats
    constructor() {
       this.fetchChats()
    }
    private async  fetchChats(){
        this.chats = await fetchChats()
    }

}