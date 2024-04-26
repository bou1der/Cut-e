import {Model,Optional, DataTypes} from "sequelize"
import Sequelize from "sequelize"
import connection from "./sequelize-connect"

interface MessageAttributes{
    id:number
    chatId:number
    text:string
    timeStamp:Date
    from:number
}
interface MessageCreateAttributes extends Optional<MessageAttributes, "text"> {}

class Messages extends Model<MessageAttributes,MessageCreateAttributes> implements MessageAttributes
{
    public id!:number
    public chatId!:number
    public text!: string
    public timeStamp!: Date
    public from!: number
}
Messages.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        chatId:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        text:{
            type:DataTypes.TEXT,
            allowNull:true
        },
        timeStamp:{
            type: DataTypes.TIME,
            defaultValue: Sequelize.NOW,
            allowNull:false
        },
        from:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        sequelize:connection,
        tableName:"chats",
        modelName:"chats"
    }
)

export default Messages