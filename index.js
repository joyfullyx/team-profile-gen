const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
// const { start } = require('repl');
const employeeArr = [];

// starter question 
const starterQuestion = [
    {
        type: 'list',
        message: 'Add a team member:',
        choices: ['manager', 'engineer', 'intern', 'no more team members to add'],
        name: 'role'
    }
];

// manager questions
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

// engineer questions
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

// intern questions
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
// function askQuestions(questions) {
//     inquirer
//     .prompt(questions)
//     .then(answers => {
//         switch(answers.role) {
//             case 'manager':
//                 inquirer.prompt(managerQuestions).then(response => {                    
//                     var manager = new Manager(response.name, response.id, response.email, response.officeNum, answers.role)
//                     // console.log(manager)
//                     console.log(manager.getOfficeNum());     
//                     employeeArr.push(manager)
//                     return askQuestions(starterQuestion);
//                 })
//             case 'engineer':
//                 inquirer.prompt(engineerQuestions).then(response =>
//                 {
//                     var engineer = new Engineer(response.name, response.id, response.email, response.github, answers.role);
//                     // console.log(engineer)
//                     console.log(engineer.getGithub());
//                     employeeArr.push(engineer);
//                     return askQuestions(starterQuestion);
//                 })
//             case 'intern':
//                 inquirer.prompt(internQuestions).then(response => {
//                     var intern = new Intern(response.name, response.id, response.email, response.school, answers.role);
//                     // console.log(intern)
//                     console.log(intern.getRole(), intern.getSchool());
//                     employeeArr.push(intern);
//                     return askQuestions(starterQuestion);
//                 })
//         }
//     })
// }

// function addEmployee() {
//     inquirer.prompt(starterQuestion)
//         .then(({ role }) => {
//         console.log(role);
//         const roleType = new Employee(role);
//         employeeArr.push(role)
//         console.log(roleType);
//         addEmployee();
//     })
// }
// addEmployee();

// questions based on role type
function addEmployee() {
    inquirer.prompt(starterQuestion)
    .then(answers => {
        console.log(answers)
        switch (answers.role) {
            case 'manager':
                console.log('I am a manager')
                addManager();
                break;

            case 'engineer':
                console.log('I am an engineer')
                addEngineer();
                break;

            case 'intern':
                console.log('I am an intern')
                addIntern();
                break;

            default:
                console.log('Thanks for using the team profile generator!')
                break;
        }
    })
}

// add manager
function addManager() {
   inquirer.prompt(managerQuestions)
   .then(answers => {
       const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
       employeeArr.push(manager);
       console.log('✓ Manager card successfully generated!')
       addEmployee();
   })
}

// add engineer
function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeArr.push(engineer);
        console.log('✓ Engineer card successfully generated!')
        addEmployee();
    })
}

// add intern
function addIntern() {
    inquirer.prompt(internQuestions)
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArr.push(intern);
        console.log('✓ Intern card successfully generated!')
        addEmployee();
    })
}

addEmployee();
