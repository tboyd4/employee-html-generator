const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole () {
        console.log('Intern');
        return 'Intern';
    }

    getSchool () {
        console.log(this.school);
        return this.school;
    }
}

module.exports = Intern;