const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const finalHtml = require('./lib/renderHtml');
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

// questions based on role type
function addEmployee() {
    inquirer.prompt(starterQuestion)
    .then(answers => {
        // console.log(answers)
        switch (answers.role) {
            case 'manager':
                addManager();
                break;

            case 'engineer':
                addEngineer();
                break;

            case 'intern':
                addIntern();
                break;
            // write html
            default:
                console.log('Team Profile successfully generated!')
                writeFile();
                break;
        }
    })
}

// add manager
function addManager() {
   inquirer.prompt(managerQuestions)
   .then(answers => {
       const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum, answers.role);
       employeeArr.push(manager);
       console.log('✓ Manager card successfully generated!')
       addEmployee();
   })
}

// add engineer
function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github, answers.role);
        employeeArr.push(engineer);
        console.log('✓ Engineer card successfully generated!')
        addEmployee();
    })
}

// add intern
function addIntern() {
    inquirer.prompt(internQuestions)
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school, answers.role);
        employeeArr.push(intern);
        console.log('✓ Intern card successfully generated!')
        addEmployee();
    })
}

addEmployee();

// write html file when switch case goes to default(no more team members to add)
const writeFile = () => {
    fs.writeFileSync(path.join(__dirname, 'output/teamProfile.html'), finalHtml(employeeArr), 'utf-8');
    console.log(__dirname, './output/teamProfile.html');
}