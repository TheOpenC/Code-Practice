function personFactory(name){
    return{ 
        talk() {
            return `Hello I am ${name}`
        }
    }
}

const me = personFactory(`Sina`)