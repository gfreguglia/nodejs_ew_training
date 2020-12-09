/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir de seu Id
 2 Obter o endereco de um usuario pelo Id
*/
const util = require('util')
const getAddressAsync = util.promisify(getAddress)

function getUser() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            // return reject(new Error('Zuou legal agora'))
            return resolve({
                id: 1,
                name: 'Aladeen',
                dob: new Date()
            })
        }, 1000)
    })
}

function getPhone(idUser) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                phone: '997371617',
                ddd: 19
            })
        }, 2000);
    })
}

function getAddress(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'Rua dos Bobos',
            housenumber: '0',
            zipcode: 111111111
        })
    }, 2000)
}

// ao adicionar async, automaticamente retorna uma Promise 
main()
async function main() {
    try {
        console.time('medida-promise')
        const user = await getUser()
        // const phone = await getPhone(user.id)
        // const address = await getAddressAsync(user.id)

        const result = await Promise.all([
            getPhone(user.id),
            getAddressAsync(user.id)
        ])
        const address = result[1]
        const phone = result[0]

        console.log(`
        Nome: ${user.name}
        Endereco: ${address.street}, ${address.housenumber}
        Telefone: (${phone.ddd}) ${phone.phone}
        `)
        console.timeEnd('medida-promise')

    }
    catch (error) {
        console.error('Zoou o role', error)
    }
}


// const userPromise = getUser()

// userPromise
//     .then(function(user) {
//         return getPhone(user.id) 
//         .then(function resolvePhone(result) {
//             return{
//                 user: {
//                     name: user.name,
//                     id: user.id
//                 },
//                 phone: result
//             }
//         })       
//     })
//     .then(function (userDataWithPhone) {
//         const address = getAddressAsync(userDataWithPhone.user.id)
//         return address.then(function resolveAddress (result) {
//             return {
//                 user: userDataWithPhone.user,
//                 phone: userDataWithPhone.phone,
//                 address: result
//             }
//         })
//     })
//     .then(function (result) {
//         console.log(`
//         Nome: ${result.user.name}
//         Endereco: ${result.address.street}, ${result.address.housenumber}
//         Telefone: (${result.phone.ddd}) ${result.phone.phone}
//         `)
//     })
//     .catch(function (error) {
//         console.error('DEU RUIM', error)
//     })


// getUser(function resolveUser(error, user) {
//     if (error) {
//         console.error('ERRO NO USUARIO', error)
//         return;
//     }
//     getPhone(user.id, function resolvePhone(error1, phone) {
//         if (error1) {
//             console.error('ERRO NO TELEFONE', error1)
//             return;
//         }
//         getAddress(user.id, function resolveAddress(error2, address) {
//             if (error2) {
//                 console.error('ERRO NO ENDERECO', error2)
//                 return;
//             }

//             console.log(`
//                 Nome: ${user.name},
//                 Endereco: ${address.street}, ${address.housenumber},
//                 Telefone: (${phone.ddd}) ${phone.phone}
//             `)
//         })
//     })

// })
//const phone = getPhone(user.id)

//console.log('telefone', phone)