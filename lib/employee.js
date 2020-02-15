class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName = function () {
        console.log(this.name);
        return this.name;
    }

    getId = function () {
        console.log(this.id);
        return this.id;
    }

    getEmail = function () {
        console.log(this.email);
        return this.email;
    }

    getRole = function () {
        console.log('Employee');
        return 'Employee';
    }
}

module.exports = Employee;