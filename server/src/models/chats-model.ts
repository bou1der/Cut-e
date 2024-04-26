import {Model,Optional, DataTypes} from "sequelize"
import connection from "./sequelize-connect"

interface ChatAttributes{
    id:number
    name:string
    users:object
    isGroup:boolean
}
interface ChatCreateAttributes extends Optional<ChatAttributes, "name" | "users"> {}

class Chats extends Model<ChatAttributes,ChatCreateAttributes> implements ChatAttributes
{
    public id!:number
    public name!:string
    public users!: object
    public isGroup!: boolean;
}
Chats.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        users:{
            type:DataTypes.JSON,
            allowNull:true
        },
        isGroup:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },
    {
        sequelize:connection,
        tableName:"chats",
        modelName:"chats"
    }
)

export default Chats