import {Model,InferAttributes,InferCreationAttributes,CreationOptional,DataTypes,Optional} from "sequelize";
import connection from "./sequelize-connect";

interface UsersAttributes {
    id:number;
    nickname:string;
    login:string;
    password:string;
    admin:boolean;
}
interface UserCreationAttributes extends Optional<UsersAttributes, "id" | "admin"> {}


class User extends Model<UsersAttributes, UserCreationAttributes> implements UsersAttributes {
    public id!: number;
    public nickname!: string;
    public login!: string;
    public password!: string;
    public admin!: boolean;
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
        }
    },
    {
        sequelize:connection,
        tableName:"users",
        timestamps:false,
    }
)


export default User