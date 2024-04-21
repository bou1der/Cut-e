import {Model,InferAttributes,InferCreationAttributes,CreationOptional,DataTypes,Optional} from "sequelize";
import connection from "./sequelize-connect";

interface UsersAttributes {
    id:number;
    nickname:string;
    login:string;
    password:string;
    admin:boolean;
}
type UserCreateAttributes = Optional<UsersAttributes, 'id' | 'admin'>

const User = connection.define('users',{
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
    }
},
    {
        tableName:'users'
    }
)

export default User