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