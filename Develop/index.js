//LIFO! structure synchronously: double check this, & only needs to be required if its used on this index, and don't need file extensions
const inquirer = require('inquirer'); 
const fs = require('fs');
const license = require('./utils/license'); 
const generateMarkdown = (answers) => 
`# ${answers.project_title}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
    * [Questions](#questions)
6. [Tests](#test)

## Description

${answers.project_description}

## Installation

${answers.project_installation}

## Usage

${answers.project_use}

## License

## Contributing

${answers.project_contributing}

### Questions

${answers.github_username}
${answers.email}

## Test

${answers.project_test}`


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

function writeToFile(fileName, data) {
    inquirer.prompt(questions)
    .then(answers => {
      const markdownContent = generateMarkdown(answers);

        fs.writeFile('readme.md', markdownContent , (err) => 
            err ? console.log(err) : console.log('Successfully created README.md')
        );
    })
}

// TODO: Create a function to initialize app
//invocation with node index.js 
function init() {}

// Function call to initialize app

init();
