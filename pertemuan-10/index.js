console.log('tes Module')

import{name} from './test-1.js'

console.log(name)


//promise
let condition = true

let newpromise = new Promise((resolve, reject) => {
    if (condition){
        resolve('berhasil')
    }else{
        reject('gagal')
    }
})

//then-catch

// newpromise
//     .then(res => console.log(res))
//     .catch(error => console.log(error))

//async-await (wajib membuat fungsi)

// const getData = async() => {
//     try{
//         let result = await newpromise
//         console.log(result)
//     }catch (error){
//         console.log(error)
//     }
// }

// getData()

//fetch()

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((json) => console.log(json))

//async - await

const holder = async() => {
    try{
        let respons = await fetch('https://jsonplaceholder.typicode.com/users')
        let json = await respons.json();
        console.log(json)
    }catch(error){
        console.log(error)
    }
}

holder()