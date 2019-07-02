const testGetAll = require('./testGetAll')
const testPostWithBody = require('./testPostWithBody')
const testGetWithIdentifier = require('./testGetWithIdentifier')
const testDeleteWithIdentifier = require('./testDeleteWithIdentifier')
const testPutWithIdentifier = require('./testPutWithIdentifier')

const serverUrl = 'http://127.0.0.1:8080/api'

async function main() {
    const test = []

    //test.push(await testPostWithBody(serverUrl))
    //test.push(await testGetAll(serverUrl))
    // test.push(await testGetWithIdentifier(serverUrl, 1))
    // test.push(await testGetWithIdentifier(serverUrl, 5))
    // test.push(await testGetWithIdentifier(serverUrl, 5, 404))
    test.push(await testDeleteWithIdentifier(serverUrl, 2))
    test.push(await testPutWithIdentifier(serverUrl, 1))

    const index = test.length

    test.forEach(function(res, i){
        if(res === false) {
            test.pop(i)
        }
    })

    console.log(`test: ${test.length-1}/${index} ejecutados correctamente`)
}

main()