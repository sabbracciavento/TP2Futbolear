const request = require('request-promise-native');

async function testDeleteWithIdentifier(serverUrl, targetId, expectedErrorCode) {

    const options = {
        method: 'DELETE',
        uri: `${serverUrl}/partidos/${targetId}`,
        json: true,
    }

    let success = true
    try {
        await request(options)
    } catch (err) {
        if (err.statusCode == expectedErrorCode) {
            console.log("delete: ok (con error esperado)")
        } else {
            success = false
            console.log(`delete: ${err.message}`)
        }
    }
    return success
}

module.exports = testDeleteWithIdentifier