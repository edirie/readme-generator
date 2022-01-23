// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username (Required) : ',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'eaddress',
        message: 'What is your email address (Required) : ',
        validate: addressInput => {
            if (addressInput) {
              return true;
            } else {
              console.log('Please enter your email address!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'pname',
        message: 'What is your project name (Required) : ',
        validate: projectInput => {
            if (projectInput) {
              return true;
            } else {
              console.log('Please enter your project name!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'pdescription',
        message: 'Please provide decription of your project (Required) : ',
        validate: descInput => {
            if (descInput) {
              return true;
            } else {
              console.log('Please provide project description!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'pdependency',
        message: 'Please provide command to install your project dependencies: '
    },
    {
        type: 'input',
        name: 'pusage',
        message: 'Please provide usage information for your project: '
    },
    {
        type: 'input',
        name: 'pcontributor',
        message: 'Please provide name of project Contributors: '
    },
    {
        type: 'input',
        name: 'ptest',
        message: 'Please provide command to execute tests for this project as part of testing: '
    },
    {
        type: 'list',
        name: 'plicense',
        message: 'Please choose license from below list: ',
        choices:['MIT',
                'Apache',
                'GPLv3',
                'Unlicense'],
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) =>
{
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
          }
    
          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
};

// TODO: Create a function to initialize app
const init = ()=> {
  if (!fs.existsSync(dir))
  {
    fs.mkdirSync(dir);
  }
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
.then(projectdata =>{
    return generatePage(projectdata);
})
.then(pageReadme => {
    return writeToFile(filepath,pageReadme);
})
.then(writemsg =>{
    console.log('');
    console.log("------------------------------------------------------------------------------");
    console.log('Readme generated at location '+filepath+' at root of the project directory');
    console.log("------------------------------------------------------------------------------");
})
.catch(err => {
    console.log(err);
});