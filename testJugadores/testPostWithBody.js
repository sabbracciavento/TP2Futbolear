const request = require('request-promise-native');

async function testPostWithBody(serverUrl) {

    const testJugadores = [
        {
            id : 1,
            nombre: "Santiago",
            mail : "s.abbracciavento@gmail.com",
        },
        {
            id : 2,
            nombre: "Max",
            mail : "maxszuchman@gmail.com",
        }
    ]

    let success = true

    for (const jugador of testJugadores) {
        
        const options = {
            method: 'POST',
            uri: `${serverUrl}/jugadores`,
            body: jugador,
            json: true
        }

        try {
            await request(options)
        } catch (err) {
            success = false
            if(err.statusCode===500){
                console.log(`post: ${err.statusCode} - partido duplicado`)
            }
        }
        return success
    }
}

module.exports = testPostWithBody
