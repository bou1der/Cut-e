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