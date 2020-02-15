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
    console.log("!!!! START BY ADDING A MANAGER !!!!\n!!!! THEN ADD AS MANY EMPLOYEES AS NEEDED !!!!");
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
        console.log(`${res.managername} added successfully as a Manager`);
        employeeArray.push(manager);
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
            console.log(`${res.engname} added successfully as an Engineer`);
            employeeArray.push(engineer);
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
        console.log(`${res.intname} added successfully as an Intern`);
        employeeArray.push(intern);
        goAgain();
    });
}
//----------------------------------------------------------------------------------------------------------//
/////////////////////////////////////////////
// Logic that will control user experience //
// V V V V V V V V V V V V V V V V V V V V //

// function that asks user if they want to add another employee, and then runs the appropriate function

const goAgain = function () {
    Inquirer.prompt({
        type: "list",
        message: "Do you need to add another employee?",
        choices: ['Add Engineer', 'Add Intern', 'Done Adding Employees'],
        name: "choice"
    }).then(function(res) {
        

        if (res.choice === 'Add Engineer') {
            makeEngineer();
        } else if (res.choice === 'Add Intern') {
            makeIntern();
        } else {
            createHtml();
        }
    })
}

// this function will run when they're done adding employees

const createHtml = function () {

    let output = employeeArray.map(employee => {

        let showThis = '';

        if (employee.getRole() === 'Manager') {
            showThis = (`
                <div class="manager">
                    <h1>Manager Name: ${employee.name}</h1>
                    <h2>Employee ID: ${employee.id}</h2>
                    <h2>Employee Email: ${employee.email}</h2>
                    <h2>Office Number: ${employee.getOfficeNumber()}</h2>
                </div>
            `);
        } else if (employee.getRole() === 'Engineer') {
            showThis = (`
            <div class="employee">
                <h1>Engineer Name: ${employee.name}</h1>
                <h2>Employee ID: ${employee.id}</h2>
                <h2>Employee Email: ${employee.email}</h2>
                <h2>GitHub User Name: ${employee.getGitHub()}</h2>
            </div>
        `);         
        } else if (employee.getRole() === 'Intern') {
            showThis = (`
                <div class="employee">
                    <h1>Intern Name: ${employee.name}</h1>
                    <h2>Employee ID: ${employee.id}</h2>
                    <h2>Employee Email: ${employee.email}</h2>
                    <h2>Intern's School: ${employee.getSchool()}</h2>
                </div>
            `);         
        }

        return (showThis);
    })

    let finalOutput = (`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Employee List</title>
            <link rel="stylesheet" type="text/css" href="./display.css">
        </head>
        <body>
            <h1 class="header">Employee List</h1>
            ${output.join(`\n`)}
        </body>
        </html>
    `)


    fs.writeFile('./output/display.html', finalOutput, (err) => {
        if (err) {
            throw err
        } 

        console.log("!!!! ALL EMPLOYEES ADDED !!!!");
    })
}


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& // 



// this is the starting point of the app.js file, and runs the whole code line
makeManager();






