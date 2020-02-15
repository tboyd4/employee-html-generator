// require statements for classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Inquirer = require('inquirer');
const fs = require('fs');

// array that will hold our objects (employees)
let employeeArray = [];

// function that will run initial inquirer prompt. Function will create one manager, and one engineer, the min

const makeManager = function () {
    // creating the manager
    Inquirer.prompt([{
        message: "Manager Name",
        name: "managername"
    },
    {
        message: "Employee ID",
        name: "employeeid"
    },
    {
        message: "Manager Email",
        name: "manageremail"
    },
    {
        message: "Manager Office Number",
        name: "managerofficenumber"
    }]).then(function (res) {
        const manager = new Manager(res.managername, res.employeeid, res.manageremail, res.managerofficenumber);
        console.log(manager);
    });
}

const makeEngineer = function () {
        // creating an engineer
        Inquirer.prompt([{
            message: "Engineer Name",
            name: "engname"
        },
        {
            message: "Employee ID",
            name: "employeeid"
        },
        {
            message: "Employee Email",
            name: "employeeemail"
        },
        {
            message: "Engineer GitHub User Name",
            name: "enggit"
        }]).then(function (res) {
            const engineer = new Engineer(res.engname, res.employeeid, res.employeeemail, res.enggit);
            console.log(engineer);
        });
}

// makeManager();
makeEngineer();