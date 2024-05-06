import {Model, Optional, DataTypes, HasMany,HasOneOptions} from "sequelize"
import Sequelize from "sequelize"
import connection from "./sequelize-connect"
import Storage from "./blob-storage-model";

interface ProfileAttributes{
    id:number
    UID:number
    name:string
    avatar:number
    background:number
    isChannel:boolean
    isPrivate:boolean

    av?:Storage | null
    bg?:Storage | null
}
interface ProfileCreateAttributes extends Optional<ProfileAttributes, "id" | "isPrivate" | "avatar" | "background"> {}

class Profile extends Model<ProfileAttributes,ProfileCreateAttributes> implements ProfileAttributes
{
    public id!:number
    public UID!:number
    public name!:string
    public avatar!:number
    public background!:number
    public isChannel!:boolean
    public isPrivate!:boolean

    av!:Storage | null
    bg!:Storage | null
}
Profile.init(
    {
        id:{
          type:DataTypes.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
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
            type:DataTypes.BOOLEAN,
            allowNull:false,
        },
        isPrivate:{
            type:DataTypes.BOOLEAN,
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

Profile.hasOne(Storage,{
    foreignKey:{field:"id",allowNull:true},
    sourceKey:"avatar",
    as:"av"
})
Profile.hasOne(Storage,{
    foreignKey:{field:"id",allowNull:true},
    sourceKey:"background",
    as:"bg"
})

export default Profile