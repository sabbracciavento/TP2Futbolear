const testGetAll = require('./testGetAll')
const testPostWithBody = require('./testPostWithBody')
const testPostWithBody_2 = require('./testPostWithBody_2')
const testPostWithBody_3 = require('./testPostWithBody_3')
const testGetWithIdentifier = require('./testGetWithIdentifier')
const testDeleteWithIdentifier = require('./testDeleteWithIdentifier')
const testPutWithIdentifier = require('./testPutWithIdentifier')
const testPutWithPlayers = require('./testPutWithPlayers')

const serverUrl = 'http://127.0.0.1:8080/api'

async function main() {
    const test = []
    test.push(await testPostWithBody(serverUrl))
    test.push(await testPostWithBody_2(serverUrl))
    test.push(await testPostWithBody_3(serverUrl))
    test.push(await testGetAll(serverUrl))
    test.push(await testGetWithIdentifier(serverUrl, 1))
    test.push(await testGetWithIdentifier(serverUrl, 4))
    test.push(await testGetWithIdentifier(serverUrl, 4, 404))
    test.push(await testDeleteWithIdentifier(serverUrl, 3))
    test.push(await testPutWithIdentifier(serverUrl, 1))
    test.push(await testPutWithIdentifier(serverUrl, 6))
    test.push(await testPutWithIdentifier(serverUrl, 6, 404))
    test.push(await testPutWithPlayers(serverUrl, 1))
    test.push(await testPutWithPlayers(serverUrl, 6))
    test.push(await testPutWithPlayers(serverUrl, 6, 404))

    const index = test.length

    test.forEach(function(res, i){
        if(res === false) {
            test.pop(i)
        }
    })

    console.log(`test: ${test.length-1}/${index} ejecutados correctamente`)
}

main()