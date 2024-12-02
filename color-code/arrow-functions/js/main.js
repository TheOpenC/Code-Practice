//arrow (anonymous function)
const sayHello = (name) => {
    return `hello ${name}`
}
// if you only have one parameter (in this case, name), you can eliminate the parameters. 
// Also, if you have only a single statement, you can eliminate brackets and just "=> return `blah.`"


// callbacks
setTimeout(function() {
    console.log('Hello')
}, 1000)

// as an arrow function:
setTimeout2(() => {
    console.log('Hello')
}, 1000)

// named functions
function sayHello2(){
    console.log('Hello')
}

// construction functions can't be arrow functions
function Person(n) {
    this.name = n
}

const me = new Person('Drew')

//object methods, object literal  
const me2 = {
    talk: function () {
        return 'hello'
    }
}

// example with this
const me3 = {
    name: 'Drew',
    talk(){ // do this
        return this
    },
    arrowTalk: () => { //dont do this
        return this
    }
}

me3.talk()
//arrowTalk binds to the global
// talk as a regular method, binds to the me3 object
// don't use arrow functions inside of objects. Stick with regular functions in this case.









