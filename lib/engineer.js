const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole () {
        console.log('Engineer');
        return 'Engineer';
    }

    getGitHub () {
        console.log(this.github);
        return this.github;
    }
}

module.exports = Engineer;