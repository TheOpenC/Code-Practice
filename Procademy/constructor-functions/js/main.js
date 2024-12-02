function Person (name, birthYear, gender) {
    this.name = name,
    this.birthYear = birthYear,
    this.gender = gender,
    this.calculateAge = () => {
        return (2024 - birthYear)
    }
}

const Drew = new Person(`Drew`, 1987, `male`)