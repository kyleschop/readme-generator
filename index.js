const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide the title for your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for you project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a detailed description of the steps required to run your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples and/or a description of how to use your project.'
    },
    {
        type: 'input',
        name: 'usageImage',
        message: 'Add an image to the "assets/images" folder then provide the complete file name.'
    },
    {
        type: 'input',
        name: 'usageVideo',
        message: 'Provide the link to a video demonstrating the usage of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is this project covered under?',
        choices: ['none', 'MIT License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Describe how people can contribute to the project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What instructions are their for testing?'
    },
    {
        type: 'input',
        name: 'questionsGitHub',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'Provide your email and how people can contact you with additional questions.'
    }
];

inquirer.prompt(questions).then(answers => {
    createMD(answers);
});

const createMD = data => {
    const template =
    generateMarkdown(data);
    fs.writeFile('README.md', template, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
};
