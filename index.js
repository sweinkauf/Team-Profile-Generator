const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'name',
           message: 'What is your name? (Required)',
           validate: nameInput => {
            if (nameInput){
                return true;
            }else{
                console.log('Enter name before continuing');
                return false;
            }
           } 
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee id? (Required)',
            validate: idInput => {
             if (idInput){
                 return true;
             }else{
                 console.log('Enter id before continuing');
                 return false;
             }
            } 
         },
         {
            type: 'input',
            name: 'email',
            message: 'Enter employee email (Required)',
            validate: emailInput => {
             if (emailInput){
                 return true;
             }else{
                 console.log('Enter email before continuing');
                 return false;
             }
            } 
         },
         {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            validate: officeNumberInput => {
             if (officeNumberInput){
                 return true;
             }else{
                 console.log('Enter office number before continuing');
                 return false;
             }
            } 
         },

    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
          type: 'list',
          name: 'menu',
          message: 'What would you like to do?',
          choices: ['add engineer', 'add intern', 'finish my team build']  
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu){
            case 'add engineer':
                promptEngineer();
                break;
            case 'add intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    });
};

const promptEngineer = () => {
    console.log('NEW ENGINEER');

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name? (Required)',
            validate: nameInput => {
             if (nameInput){
                 return true;
             }else{
                 console.log('Enter name before continuing');
                 return false;
             }
            } 
         },
         {
             type: 'input',
             name: 'id',
             message: 'Enter employee id? (Required)',
             validate: idInput => {
              if (idInput){
                  return true;
              }else{
                  console.log('Enter id before continuing');
                  return false;
              }
             } 
          },
          {
             type: 'input',
             name: 'email',
             message: 'Enter employee email (Required)',
             validate: emailInput => {
              if (emailInput){
                  return true;
              }else{
                  console.log('Enter email before continuing');
                  return false;
              }
             } 
          },
          {
             type: 'input',
             name: 'github',
             message: 'What is their github? (Required)',
             validate: githubInput => {
              if (githubInput){
                  return true;
              }else{
                  console.log('Enter github before continuing');
                  return false;
              }
             } 
          },
 
     ]).then(answers => {
         console.log(answers);
         const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
         teamMembers.push(engineer);
         promptMenu();
     })  
};

const promptIntern = () => {
    console.log('NEW INTERN');

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name? (Required)',
            validate: nameInput => {
             if (nameInput){
                 return true;
             }else{
                 console.log('Enter name before continuing');
                 return false;
             }
            } 
         },
         {
             type: 'input',
             name: 'id',
             message: 'Enter employee id? (Required)',
             validate: idInput => {
              if (idInput){
                  return true;
              }else{
                  console.log('Enter id before continuing');
                  return false;
              }
             } 
          },
          {
             type: 'input',
             name: 'email',
             message: 'Enter employee email (Required)',
             validate: emailInput => {
              if (emailInput){
                  return true;
              }else{
                  console.log('Enter email before continuing');
                  return false;
              }
             } 
          },
          {
             type: 'input',
             name: 'school',
             message: 'Where did they go to school? (Required)',
             validate: schoolInput => {
              if (schoolInput){
                  return true;
              }else{
                  console.log('Enter school before continuing');
                  return false;
              }
             } 
          },
 
     ]).then(answers => {
         console.log(answers);
         const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
         teamMembers.push(intern);
         promptMenu();
     })
};

const buildTeam = () => {
    console.log('Finished building team!');

    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR)
    }
    fs.writeFileSync(distPath, generateHTML(teamMembers), 'utf-8');
}

promptManager();
