// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer'); 

// TODO: Create an array of questions for user input
//application repository info: 
//Title, description, table of contents, installation, usage, license,contribution guidelines, test instructions, 
//github username, email> to Questions section with instructions on how to reach for questions; 
const questions = [];
inquirer.prompt({
    name: 'project_title',
    message: 'What is your project title?', 
},
{
    name: 'project_description', 
    messaage: 'How would you describe your project?', 
}, 
{
    name: 'project_installation'
    message: 'How do we install your project?', 
}, 
{
    name: 'project_use', 
    message: 'How do we use your project?', 
}, 
{//needs an array of choices
    name: 'project_license', 
    type: 'checkbox', 
    message:'What license would you like to use?', 
    choices: //name of license array, 
}, 
{
    name: 'project_contributing', 
    message: 'How do we contribute to your project?', 
}, 
{
    name: 'project_test', 
    message: 'How do we test your project?', 
}, 
{
    name: 'github_username', 
    message: 'What is your Gitub username?', 
}, 
{
    name: 'email', 
    message: 'What is your project contact email?',
}

)

// TODO: Create a function to write README file
//sections: Title, Description, Installation, Usage, License,Contributing, Tests
//clickable links: table of contents 
//choose license app from list of options, adds badge to top
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//invocation: node index.js 
init();
