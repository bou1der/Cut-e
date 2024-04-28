import connection from "./sequelize-connect"
import { Model, DataTypes, Optional } from "sequelize";

type Members = {id:number,nickname:string}
interface ChatAttributes {
    id: number;
    name: string;
    users: string;
    isGroup: boolean;
    members?:Members[]
}

interface ChatCreateAttributes extends Optional<ChatAttributes, "name" | "users" | "members"> {}

class Chats extends Model<ChatAttributes, ChatCreateAttributes> implements ChatAttributes {
    public id!: number;
    public name!: string;
    public users!: string;
    public isGroup!: boolean;
    public members?:Members[]
}

Chats.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        users: {
            type: DataTypes.JSON,
            allowNull: true,

        },
        isGroup: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        members:{
            type: DataTypes.VIRTUAL
        }
    },
    {
        sequelize: connection,
        tableName: "chats",
        modelName: "chats",
    }
);

export default Chats