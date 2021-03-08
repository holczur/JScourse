const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDrivingLicense: true,

    calcAge: function() {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driver's license'`;
    }
};


console.log(jonas.getSummary())

