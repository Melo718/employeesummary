
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");

const render = require("./lib/htmlRenderer");

const team = [];

function employeeRole() {
    inquirer.prompt([{
        type: "list",
        message: "What type of team member would you like to add? (Use arrow keys)",
        name: "name",
        choices: ["Manager", "Engineer", "Intern"],
    }])
}

function managerRole() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your manager's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "number",
        },
    ]) .then(function(answer) {
        let manager = new Manager(answer.name, answer.id, answer.email, answer.number)
        team.push(manager);

        employeeType()
    })
};


function engineerRole() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your engineer's Github username?",
            name: "Github",
        },
    ]) .then(function(answer) {
        let engineer = new Engineer(answer.name, answer.id, answer.email, answer.Github)
        team.push(engineer);

        employeeType()
    })
};


function internRole() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "school",
        },
    ]) .then(function(answer) {
        let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
        team.push(intern);

        employeeType()
    })
};