const { getPeople } = require('./service')

Array.prototype.myReduce = function (callback, initialValue) {
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0]
    for (let idx = 0; idx <= this.length - 1; idx++) {
        finalValue = callback(finalValue, this[idx], this)
    }
    return finalValue;
}

async function main () {
    try{
        const { results } = await getPeople('a')
        const heights = results.map(item => item.height)
        console.log('alturas', heights)

        // const totalHeights = heights.reduce((previous, next) => {
        //     return parseInt(previous) + parseInt(next)
        // })

        const myList = [
            ['Gabi', 'Freguglia'],
            ['NodeBR', 'TypeScript']
        ]
        const totalHeights = myList.myReduce((previous, next) => {
            return previous.concat(next)
        }, [])
        .join(', ')

        console.log('total', totalHeights)
    } catch (error) {
        console.error('DEU XABU', error)
    }
}

main()