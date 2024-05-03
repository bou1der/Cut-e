import {Model,Optional, DataTypes} from "sequelize"
import Sequelize from "sequelize"
import connection from "./sequelize-connect"

interface PostAttributes{
    id:number
    ProfileID:number
    AuthorID:number
    text:string
    timestamp:string
}
interface PostsCreateAttributes extends Optional<PostAttributes, "id" | "timestamp"> {}

class Posts extends Model<PostAttributes,PostsCreateAttributes> implements PostAttributes
{
    public id!:number
    public ProfileID!:number
    public AuthorID!:number
    public text!:string
    public timestamp!:string
}
Posts.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        ProfileID:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        AuthorID:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        text:{
            type: DataTypes.STRING,
            allowNull:false
        },
        timestamp:{
            type:DataTypes.DATE,
            defaultValue:Sequelize.NOW,
            allowNull:false,
        }
    },
    {
        sequelize:connection,
        tableName:"posts",
        modelName:"posts"
    }
)

export default Posts