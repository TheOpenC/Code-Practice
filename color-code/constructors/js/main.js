function Person(name) {
    //const this = {}
    this.name = name
    this.talk = () => {
        return `Hello I am ${this.name}`
    }
    // return this
}

const sina = new Person('Sina')
const ben = new Person('Ben')
const same = new Person('Sam')


function SuperElement(type, content) {
    this.el = document.createElement(type)
    this.el.innerText = content 
    document.body.append(this.el)
    this.el.addEventLister('click', () =>{
        console.log(this.el)
    })
}

const h1 = new SuperElement('h1', 'Hello00!')
const array = ['a', 'b', 'c']

const myElements = array.map(item => {
    return new SuperElement('p', item)
})

