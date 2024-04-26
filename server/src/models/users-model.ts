import {Model,InferAttributes,InferCreationAttributes,CreationOptional,DataTypes,Optional} from "sequelize";
import Sequelize from "sequelize"
import connection from "./sequelize-connect";

interface UsersAttributes {
    id:number;
    nickname:string;
    login:string;
    password:string;
    admin:boolean;
    createdAt?:Date;
    updatedAt?:Date;
}
interface UserCreationAttributes extends Optional<UsersAttributes, "id" | "admin"> {}


class User extends Model<UsersAttributes, UserCreationAttributes> implements UsersAttributes {
    public id!: number;
    public nickname!: string;
    public login!: string;
    public password!: string;
    public admin!: boolean;
    public createdAt!:Date
    public updatedAt!:Date
}

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        nickname:{
            type: new DataTypes.TEXT,
            allowNull:false,
        },
        login:{
            type:new DataTypes.STRING(64),
            allowNull:false
        },
        password:{
            type:new DataTypes.STRING(64),
            allowNull:false,
        },
        admin:{
            type:DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull:false,
        },
        createdAt:{
            type:DataTypes.DATE,
            defaultValue:Sequelize.NOW
        },
        updatedAt:{
            type:DataTypes.DATE,
            defaultValue:Sequelize.NOW
        }
        
    },
    {
        sequelize:connection,
        tableName:"users",
        timestamps:false,
    }
)


export default User