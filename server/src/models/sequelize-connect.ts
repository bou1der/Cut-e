import {Sequelize} from "sequelize";
import config from "../../config.json"

const connection = new Sequelize(
    `${config.server.database.name}`,
    `${config.server.database.user}`,
    `${config.server.database.password}`,
    {
        host:`${config.server.database.host}`,
        dialect:'mysql'
    })

const checkConnection = async () =>{
    const test = await connection.authenticate()
    if (test === undefined){
        console.log(`[DATABASE]:${config.server.database.name}: Success connection ...`)
    }
}
try {
    checkConnection()
}catch (e) {
    console.log(e)
}

export default connection
