
const request = require('request-promise-native');

async function testPutWithIdentifier(serverUrl, targetId, expectedErrorCode) {

    const nuevoJugador =
        {
            id : 1,
            nombre: "Leopoldo",
            mail : "maxszuchman@gmail.com",
        }

    const options = {
        method: 'PUT',
        uri: `${serverUrl}/jugadores/${targetId}`,
        body: nuevoJugador,
        json: true
    };

    let success = true

    try {
        const jugador = await request(options)
        if (!jugador & expectedErrorCode === 404) {
            console.log("put: ok (con error esperado)")
        } else if (!jugador) {
            success = false
            console.log("put: 404 - jugador no encontrado")
        }
    } catch (err) {
        if (err.statusCode == expectedErrorCode){
            console.log("put: ok (con error esperado)")
        } else {
                success = false
                console.log(`put: ${err.message}`)
            }
        }
        return success
    }

module.exports = testPutWithIdentifier