import {Model,Optional, DataTypes} from "sequelize"
import Sequelize from "sequelize"
import connection from "./sequelize-connect"

interface StorageAttributes{
    id:number
    directory:string
    link:string
}
interface StorageCreateAttributes extends Optional<StorageAttributes, "id"> {}

class Storage extends Model<StorageAttributes,StorageCreateAttributes> implements StorageAttributes
{
    public id!:number
    public directory!:string
    public link!:string
}
Storage.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        directory:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        link:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize:connection,
        tableName:"blobstorage",
        modelName:"blobstorage"
    }
)

export default Storage