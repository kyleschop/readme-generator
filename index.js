// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    }
];

inquirer.prompt(questions).then(answers => {
    createMD(answers);
});

const createMD = data => {
    const template =
    `# ${data.title}`
    fs.writeFile('README.md', template, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
