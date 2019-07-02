const request = require('request-promise-native')

async function testGetWithIdentifier(serverUrl, targetId, expectedErrorCode){

    const options = {
        uri: `${serverUrl}/jugadores/${targetId}`,
        json: true
    }

    let success = true

    try {
        const resultArray = await request(options)
        const result = resultArray[0]
        let testOK = true

        if (!result & expectedErrorCode === 404) {
            console.log("get: ok con error esperado")
        } else if (!result) {
            success = false
            console.log("get: jugador no encontrado")
        } else if (!result.hasOwnProperty('id')) {
            testOK = false
        } else if (!result.hasOwnProperty('nombre')) {
            testOK = false
        } else if (!result.hasOwnProperty('mail')) {
        }
        if (!testOK) {
            success = false
            console.log("get: 412 - el jugador no tiene los atributos necesarios")
        }
    } catch (err) {
        console.log(err)
        if (err.statusCode === expectedErrorCode) {
            console.log("get: ok con error esperado")
        } else {
            success = false
            console.log(`get: ${err.statusCode} - ${err.message}`)
        }
        
    }
    return success
}

module.exports = testGetWithIdentifier
