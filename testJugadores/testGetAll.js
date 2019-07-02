const request = require('request-promise-native');

async function testGetAll(serverUrl) {

    const options = {
        uri: `${serverUrl}/jugadores`,
        json: true
    }

    let success = true

    try {
        const jugadores = await request(options)

        let testOK = true
        for (let i = 0; i < jugadores.length && testOK; i++) {
            if (!jugadores[i].hasOwnProperty('id')) {
                testOK = false
            } else if (!jugadores[i].hasOwnProperty('nombre')) {
                testOK = false
            } else if (!jugadores[i].hasOwnProperty('mail')) {
                testOK = false
            }
        }
        if (!testOK) {
            success = false
            console.log("get all: 412 - el jugador no tiene los atributos necesarios")
        }
    } catch (err) {
        success = false
        console.log(`get all: ${err.statusCode} - ${err.message}`)
    }
    
    return success
}

module.exports = testGetAll