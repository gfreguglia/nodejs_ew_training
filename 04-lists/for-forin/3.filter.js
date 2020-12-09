const { getPeople } = require('./service')

/*

{
const item = {
    nome: 'Gabriel',
    idade: 23
}

const { nome, idade } = item
console.log(nome, idade)

*/

Array.prototype.myFilter = function (callback) {
    const list = []
    for( idx in this ) {
        const item = this[idx]
        const result = callback(item, idx, this)
        if (!result) continue;
        list.push(item)
    }
    return list;
}

async function main() {
    try{
        const { 
            results 
        } = await getPeople('a')

        // const LarsFamily = results.filter(function (item) {
        //     // by default return a boolean to decide 
        //     // whether to keep or remove from list
        //     // false > remove
        //     // true > keep

        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // })

        const LarsFamily = results.myFilter((item, idx, list) => {
            console.log(`index: ${idx},`, list.length)
            return item.name.toLowerCase().indexOf('lars') !== 1
        })
        
        const names = LarsFamily.map(person => person.name)
        // console.log(names)
    } catch (error) {
        console.error('DEU XABU', error)
    }
}

main()