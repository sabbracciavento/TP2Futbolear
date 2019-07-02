const request = require('request-promise-native')

async function testPostWithBody(serverUrl) {

    const jugador = { nombre: "Santiago", mail: "s.abbracciavento@gmail.com" }

    const testPartidos = [
        {
            id : 1,
            admin: "Santiago",
            fecha : "19/06/2019",
            hora: "20:20",
            lugar : "Sarmiento",
            jugadores: ["Santiago"]
        },
    ]

    let success = true

    for (const partido of testPartidos) {

        const options = {
            method: 'POST',
            uri: `${serverUrl}/partidos`,
            body: { partido , jugador },
            json: true
        }

        try {
            await request(options)

            //     if (!result) {
            //         testOK = false
            //     } else if (!result.hasOwnProperty('id')) {
            //         testOK = false
            //     } else if (!result.hasOwnProperty('admin')) {
            //         testOK = false
            //     } else if (!result.hasOwnProperty('fecha')) {
            //         testOK = false
            //     } else if (!result.hasOwnProperty('hora')) {
            //         testOK = false
            //     } else if (!result.hasOwnProperty('lugar')) {
            //     testOK = false
            //     }

            // if (!testOK) {
            //     success = false
            //     console.log("post: 412 - el partido no tiene los atributos necesarios")
            //     }
            // }
            
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
