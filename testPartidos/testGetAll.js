const request = require('request-promise-native');

async function testGetAll(serverUrl) {

    const options = {
        uri: `${serverUrl}/partidos`,
        json: true
    }

    let success = true

    try {
        const partidos = await request(options)

        let testOK = true
        for (let i = 0; i < partidos.length && testOK; i++) {
            if (!partidos[i].hasOwnProperty('id')) {
                testOK = false
            } else if (!partidos[i].hasOwnProperty('admin')) {
                testOK = false
            } else if (!partidos[i].hasOwnProperty('fecha')) {
                testOK = false
            } else if (!partidos[i].hasOwnProperty('hora')) {
                testOK = false
            } else if (!partidos[i].hasOwnProperty('lugar')) {
                testOK = false
            } else if (!partidos[i].hasOwnProperty('jugadores')) {
                testOK = false
            }
        }
        if (!testOK) {
            success = false
            console.log("get all: 412 - el partido no tiene los atributos necesarios")
        }
    } catch (err) {
        success = false
        console.log(`get all: ${err.statusCode} - ${err.message}`)
    }
    
    return success
}

module.exports = testGetAll