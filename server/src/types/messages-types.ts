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
export type blobFile = {
        key:string
        link:string
}
export type postParams = {
        author:number
        to:number
        text:string
        images:File[]
        params?:{
                private:boolean
        }
}