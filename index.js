const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Egineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const employeeArr = [];

const starterQuestion = [
    {
        type: 'list',
        message: 'What is your role?',
        choices: ['manager', 'engineer', 'intern'],
        name: 'role'
    }
];

const managerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNum',
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    } 
];

const internQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Where did you attend school?',
        name: 'school',
    }
];

// ask questions array based on role type 
function askQuestions(questions) {
    inquirer
    .prompt(questions)
    .then(answers => {
        switch(answers.role) {
            case 'manager':
                inquirer.prompt(managerQuestions).then(response => {                    
                    var manager = new Manager(response.name, response.id, response.email, response.officeNum, answers.role)
                    console.log(manager)
                    console.log(manager.getOfficeNum());     
                    employeeArr.push(manager)
                    return askQuestions(starterQuestion);
                })
            case 'engineer':
                inquirer.prompt(engineerQuestions).then(response =>
                {
                    var engineer = new Engineer(response.name, response.id, response.email, response.github, answers.role);
                    console.log(engineer)
                    console.log(engineer.getGithub());
                    employeeArr.push(engineer);
                    return askQuestions(starterQuestion);
                })
            case 'intern':
                inquirer.prompt(internQuestions).then(response => {
                    var intern = new Intern(response.name, response.id, response.email, response.school, answers.role);
                    console.log(intern)
                    console.log(intern.getSchool());
                    employeeArr.push(intern);
                    return askQuestions(starterQuestion);
                })
        }
    })
}
askQuestions(starterQuestion);
