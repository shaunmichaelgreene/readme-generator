// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const emailValidator = require('validator');

// TODO: Create an array of questions for user input

const questions = [
        {
            type: "input",
            name: "title",
            message: "What is the name of your project? (Required)",
            validate: (title) => {
                if (title) {
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
            validate: (description) => {
                if (description) {
                    return true;
                } else {
                    console.log("You need to enter a project description!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "githubLink",
            message: "Enter the GitHub link to your project repository. (Required)",
            validate: (githubLink) => {
                if (githubLink) {
                    return true;
                } else {
                    console.log("You need to enter a GitHub project repository link!");
                    return false;
                    //improve error handling here
                }
            },
        },
        {
            type: "input",
            name: "githubUser",
            message: "Enter your GitHub username. (Required)",
            validate: (githubUser) => {
                if (githubUser) {
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
            validate: (email) => {
                if (emailValidator.isEmail(email)) {
                    return true;
                } else {
                    console.log(" Error - You need to enter a valid email address!");
                    return false;
                }
                //credit to validator.js
            },
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter instructions to install your project:',
            validate: install => {
                 if(install){
                    return true;
                  } else {
                       console.log('Please enter instructions to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter some information on how your project can be used:',
            validate: usage => {
                if(usage){
                   return true;
                 } else {
                      console.log('Please enter some details about how your project can be used!');
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
            message: 'Please select a license',
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'No License']
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Please enter the source/location for a screenshot of the application:',
        },
        {
            type: 'input',
            name: 'url',
            message: 'Please enter the live deployed URL for the application(if applicable):',
        },
    ];
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        //create readme and add to dist folder
        fs.writeFile('./dist.README.md', (fileName, data), err => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'README created!'
        });
        })
    })
};

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