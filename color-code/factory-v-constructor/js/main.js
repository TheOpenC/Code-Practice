// //factory Function

// function createPerson(name) {
//     return {
//         name,
//         talk() {
//             return `I am ${this.name}`
//         }
//     }
// }

// // const me = createPerson('Sina')
// // const you = createPerson('Qoli')

// const myCoolProto = {
//     talk() {
//         return `Hello, I am ${this.name}`
//     }
// }

// function createPerson(name) {
//     return Object.create(myCoolProto, {
//         name: {
//             value: name
//         }
//     })
// }

// const me = createPerson('Drew')

function Person(name){
    this.name = name
}

const ben = new Person ('Ben')
