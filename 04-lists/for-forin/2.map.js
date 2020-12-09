const service = require('./service')

Array.prototype.myMap = function (callback) {
    const newMappedArray = []
    for(let idx = 0; idx <= this.length - 1; idx++) {
        const result = callback(this[idx], idx)
        newMappedArray.push(result)
    }

    return newMappedArray;
}

async function main() {
    try{ 
        const results = await service.getPeople('a')
        // const names = []
        
        // results.results.forEach(function (item) {
        //     names.push(item.name)
        // })

        // const names = results.results.map(function (person) {
        //     return person.name
        // })

        // const names = results.results.map(person => person.name)

        const names = results.results.myMap(function (person, idx) {
            return `${idx}.${person.name}`
        })
        console.log('names', names)
    } catch(error) {
        console.error('DEU XABU', error)
    }
}

main()