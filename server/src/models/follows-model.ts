import {Model,Optional, DataTypes} from "sequelize"
import Sequelize from "sequelize"
import connection from "./sequelize-connect"

interface FollowsAttributes{
    profileID:number
    UID:number
}
interface FollowsCreateAttributes extends FollowsAttributes{}

class Follows extends Model<FollowsAttributes,FollowsCreateAttributes> implements FollowsAttributes
{
    public profileID!:number
    public UID!:number
}
Follows.init(
    {
        profileID:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        UID:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
    },
    {
        sequelize:connection,
        tableName:"follows",
        modelName:"follows"
    }
)

export default Follows