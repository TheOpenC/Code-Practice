function createPerson(name) {
    return {
        name,
        talk(){
            return `I am ${this.name}`
        }
    }
}

const me = createPerson('Sina')
const you = createPerson('Qoli')