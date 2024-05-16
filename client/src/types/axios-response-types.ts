export type chat = {
        id:number
        name:string
        members:Array<string>
        isGroup:boolean
}
export type message = {
        id:number
        chatId:number
        text:string
        timeStamp:string
        from:number
}
export type profile ={
        id:number
        UID:number,
        name:string,
        avatar:string | null,
        background:string | null,
        isPrivate:boolean,
        isChannel:boolean
}

export type storage = {
        id:number,
        directory:string,
        link:string
}
export type counters = {
        count:number,
        users:Array<number>
}
export type post = {
        PID:number
        __v:number
        _id:string
        title:string
        images:Array<Omit<storage, "id">>
        likes:counters
        views:counters
}
export type author = {
        UID:number,
        nickname:string,
        avatar:string | null
}