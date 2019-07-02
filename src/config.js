const dotenv = require('dotenv')
dotenv.config()

const dbConfigs = {
    home: {
        client: 'pg',
        version: '7.11',
        connection: {
            host : '127.0.0.1',
            user : 'futbolear',
            password : '32133694',
            database : 'futboleardb'
        }
    }
}

const srvConfigs = {
    port: process.env.PORT || 8080,
    env: process.env.DB_ENV,
    mode: process.env.MODE
}

module.exports = {
    dbConfig: dbConfigs[srvConfigs.env],
    port: srvConfigs.port,
    mode: srvConfigs.mode
}