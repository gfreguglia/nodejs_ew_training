const EventEmitter = require('events')
class MyEmitter extends EventEmitter {

}
const myEmitter = new MyEmitter()
const nameEvent = 'user:click'

myEmitter.on(nameEvent, function (click) {
    console.log('um usuario clicou', click)
})

// myEmitter.emit(nameEvent, 'at the scroll bar')
// myEmitter.emit(nameEvent, 'at OK button')

// let count = 0
// setInterval(function () {
//     myEmitter.emit(nameEvent, 'at OK button' + (count++))
// }, 1000)

const stdin = process.openStdin()

function main() {
    return new Promise(function (resolve, reject) {
        stdin.addListener('data', function (value) {
            // console.log(`Voce digitou: ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}
main().then(function (result) {
    console.log('resultado', result.toString())
})