import {Model,Sequelize,DataTypes,Optional} from "sequelize";
import connection from "./sequelize-connect";

interface TokenAttributes {
    id:number;
    refresh:string;
}
interface TokenCreateAttributes extends Optional<TokenAttributes, 'refresh'> {}

class Tokens extends Model<TokenAttributes, TokenCreateAttributes> implements TokenAttributes
{
    public id!: number;
    public refresh!: string;
}
Tokens.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        refresh: {
            type: DataTypes.STRING(256),
            allowNull: true,
        },
    },
    {
        sequelize: connection, // Подключение к базе данных Sequelize
        modelName: 'tokens', // Наименование модели в Sequelize
        tableName: 'tokens', // Наименование таблицы в базе данных
    }
)

export default Tokens