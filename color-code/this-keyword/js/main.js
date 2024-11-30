// function talk() {
//     return this
// }

// const me = {
//     name: 'Sina',
//     talk
// }

//constructor
// function Person(n) {
//     this.name = n
//     this.talk = function() {
//         console.log(this)
//     }
// }

// const me = new Person('Drew')


// callback function

function Person(n) {
    this.name = n
    this.talk = function() {
        console.log(this)
    }

    setTimeout(function() {
        console.log(this)
    }, 100)
}

