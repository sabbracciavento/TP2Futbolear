const request = require('request-promise-native')

async function testPutWithPlayers(serverUrl, targetId, expectedErrorCode) {

    const agregarJugadores = true
    
    const nuevoJugador = {
        nombre: "Max",
    }

    const options = {
        method: 'PUT',
        uri: `${serverUrl}/partidos/${targetId}`,
        body: { nuevoJugador, agregarJugadores },
        json: true
    };

    let success = true

    try {
        const partido = await request(options)
        if (!partido & expectedErrorCode === 404) {
            console.log("put: ok (con error esperado)")
        } else if (!partido) {
            success = false
            console.log("put: 404 - partido no encontrado")
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

module.exports = testPutWithPlayers