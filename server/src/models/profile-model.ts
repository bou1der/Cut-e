import {Model,Optional, DataTypes} from "sequelize"
import Sequelize from "sequelize"
import connection from "./sequelize-connect"

interface ProfileAttributes{
    UID:number
    name:string
    avatar:number
    background:number
    isChannel:boolean
    isPrivate:boolean
}
interface ProfileCreateAttributes extends Optional<ProfileAttributes, "isPrivate" | "avatar" | "background"> {}

class Profile extends Model<ProfileAttributes,ProfileCreateAttributes> implements ProfileAttributes
{
    public UID!:number
    public name!:string
    public avatar!:number
    public background!:number
    public isChannel!:boolean
    public isPrivate!:boolean
}
Profile.init(
    {
        UID:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        avatar:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        background:{
            type: DataTypes.INTEGER,
            allowNull:true
        },
        isChannel:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        isPrivate:{
            type:DataTypes.INTEGER,
            defaultValue:false,
            allowNull:false
        }
    },
    {
        sequelize:connection,
        tableName:"profiles",
        modelName:"profiles"
    }
)

export default Profile