// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const questions = [
        {
            type: "input",
            name: "name",
            message: "What is the name of your project? (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You need to enter a project name!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of the project (Required)",
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("You need to enter a project description!");
                    return false;
                }
            },
        },
        {
            type: "checkbox",
            name: "languages",
            message: "What did you this project with? (Check all that apply)",
            choices: [
                "JavaScript",
                "HTML",
                "CSS",
                "ES6",
                "jQuery",
                "Bootstrap",
                "Node",
            ],
        },
        {
            type: "input",
            name: "link",
            message: "Enter the GitHub link to your project. (Required)",
            validate: (linkInput) => {
                if (linkInput) {
                    return true;
                } else {
                    console.log("You need to enter a project GitHub link!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username. (Required)",
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("You need to enter your GitHub username!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address. (Required)",
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You need to enter your email address!");
                    return false;
                }
                //need better email validation here
            },
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter instructions to install your project:',
            validate: installInput => {
                 if(installInput){
                    return true;
                  } else {
                       console.log('Please enter instructions to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution instructions for anoyone looking to contribute to the project:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter instructions for how to test the application:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license',
            choices: ['MIT', 'ISC', 'Apache-2.0', 'GPL-3.0', 'No License']
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Please enter the source/location for a screenshot of the application:',
        },
    ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(data => {
        console.log(data)
        return generateMarkdown(data);
    })
    .then(data => {
        return writeToFile('README.md', data)
    });