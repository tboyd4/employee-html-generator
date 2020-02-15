// require statements for classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Inquirer = require('inquirer');
const fs = require('fs');

// array that will hold our objects (employees)
let employeeArray = [];

// Three Functions that make each employee type ------------------------------------------------------------//
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
        employeeArray.push(manager);
        console.log(employeeArray);
        goAgain();
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
            employeeArray.push(engineer);
            console.log(employeeArray);
            goAgain();
        });
}

const makeIntern = function () {
    // creating an intern
    Inquirer.prompt([{
        message: "Intern Name",
        name: "intname"
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
        message: "Intern School",
        name: "intschool"
    }]).then(function (res) {
        const intern = new Intern(res.intname, res.employeeid, res.employeeemail, res.intschool);
        console.log(intern);
        employeeArray.push(intern);
        console.log(employeeArray);
        goAgain();
    });
}
//----------------------------------------------------------------------------------------------------------//
/////////
// Logic that will control user experience //
// V V V V V V V V V V V V V V V V V V V V //

// function that asks user if they want to add another employee, and then runs the appropriate function

const goAgain = function () {
    Inquirer.prompt({
        type: "list",
        message: "Choose next step",
        choices: ['Add Engineer', 'Add Intern', 'Done Adding Employees'],
        name: "choice"
    }).then(function(res) {
        console.log(res.choice);

        if (res.choice === 'Add Engineer') {
            makeEngineer();
        } else if (res.choice === 'Add Intern') {
            makeIntern();
        } else {
            createHtml();
        }
    })
}

const createHtml = function () {
    console.log("FINAL ARRAY HERE : " + JSON.stringify(employeeArray));
}




makeManager();






