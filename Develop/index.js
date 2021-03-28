
const fs = require('fs');
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown.js'); 
const license = require('./utils/license'); 


const questions = [
{
    name: 'project_title',
    message: 'What is your project title?',
    //write to Title 
},
{
    type: 'editor', 
    name: 'project_description',  
    messaage: 'How would you describe your project?', 
    //write to Description
}, 
{
    type: 'editor',
    name: 'project_installation', 
    message: 'How do we install your project?', 
    //write to Installation
}, 
{
    type: 'editor', 
    name: 'project_use',  
    message: 'How do we use your project?', 
    //write to Usage
}, 
{//needs an array of choices: function to handle the license portion here? 
    //for(const [key,value] of choices){ `do this with ${key} and ${value}`} ? 
    type: 'checkbox', 
    name: 'project_license',  
    message:'What license would you like to use?', 
    choices: ['Apache', 'BSD', 'IBM', 'MIT', 'Mozilla', 'Creative Commons'], 
    //write to License AND render Badge near top
}, 
{
    type: 'editor', 
    name: 'project_contributing',
    message: 'How do we contribute to your project?',
    //write to Contributing 
}, 
{
    type: 'editor', 
    name: 'project_test',
    message: 'How do we test your project?', 
    //write to Test
}, 
{
    name: 'github_username', 
    message: 'What is your Gitub username?', 
    //write to Questions
}, 
{
    name: 'email', 
    message: 'What is your project contact email?',
    //write to Questions
}]; 

// TODO: Create a function to write README file
//sections: Title, Description, Installation, Usage, License,Contributing, Tests
//clickable links: table of contents 
//choose license app from list of options, adds badge to top
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
    .then(answers => {//returns a promise

        fs.writeFile('full-file-path', content, err => {
            if(err){
                console.error(err); 
                return; 
            }
        })
    })
}

// TODO: Create a function to initialize app
//invocation with node index.js 
function init() {}

// Function call to initialize app

init();
