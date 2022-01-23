// Studied several sample codes for assistance on this
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);



// TODO: Create an array of questions for user input
function prompts (){
    return inquirer.prompt([
        {
          type: 'input',
          message: 'What is the title of your project?',
          name: 'projTitle',
        },
        {
          type: 'input',
          message: 'Write a short description of your project:',
          name: 'description',
        },
        {
          type: 'input',
          message: 'Please list installation instructions:',
          name: 'installInstructions',
        },
        {
            type: 'input',
            message: 'What is the usage of this project?',
            name: 'usageInstructions',
          },
          {
            type: 'list',
            message: 'Please select the license you would like to use:',
            name: 'license',
            choices: ['MIT', 'Apache', 'Academic', 'Mozilla', 'Open', 'GNU', 'ISC']
          },
          {
            type: 'input',
            message: 'Please list any contribution guidelines:',
            name: 'contributionInstructions',
          },
          {
            type: 'input',
            message: 'Are there any tests instructions? If so, list them:',
            name: 'tests',
          },
          {
            type: 'input',
            message: 'Please enter your github username:',
            name: 'github',
          },
          {
            type: 'input',
            message: 'Please enter your email:',
            name: 'email',
          },
        ])}
    
    
    
    // // TODO: Create a function to initialize app
    
    async function init() {
    
        var answers = await prompts()
        console.log(answers)
        const generateREADME = generateMarkdown(answers);
        await writeFileAsync('./sample_readme/README.md', generateREADME);    
    
    }
    
    // // // Function call to initialize app
    init();