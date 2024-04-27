import {fetchChats} from "../handlers/messages-request-handler.ts";

type Chats = []
class MessageStore {
    public chats: Chats
    constructor() {
    
    }
    async  fetchChats(){
        this.chats = await fetchChats()
        console.log(this.chats)
    }

}

export default new MessageStore()