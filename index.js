// TODO: Include packages needed for this application
function init () {
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
         
    }, {
        type: "input",
        name: "Description",
        message: "What is the Description of your project?",
         
    }, {
        type: "input",
        name: "Installation", 
        message: "How to do you install this app?", 
        
    }, {
        type: "input",
        name: "Usage", 
        message: "How to use this app?",
        
    }, {
        type: "input",
        name: "Contributing",
        message: "Name contrubuting members of this project.",
        
    }, {
        type: "input",
        name: "Tests",
        message: "What command is used to run a test?",
        
    }, {
        type: "input",
        name: "License",
        message: "What license used?",
    }, {
        type: "input",
        name: "github", 
        message: "What is your GitHub account?",
    }, {
        type: "input",
        name: "Email", 
        message: "What is your email address?",
    }
  ]) 

  .then((response) => {
    return fs.writeFile("README.md", generateMarkdown(response), err => {
        if (err) {
            console.log(err)
            return
            }
        console.log("Success");
    });
  });
};
 
// Function call to initialize app
init();
