// TODO: Include packages needed for this application

// const readline = require('readline-sync');
// const fs = require('fs');
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from  './utils/generateMarkdown.js'
// TODO: Create an array of questions for user input
const questions = [
    // Title input
    "What is the title of the application?\n",
    // Author input
    "Who is the author of the README?\n",
    // About this Project input
    "What does your application do?\n",
    "What was your motivation behind the project?\n",
    "Why did you use the technologies you used?\n",
    "What're some challenges you faced during creation?\n",
    "What're your goals for future implications?\n",
    // Table of Contents y/n
    "Input your table of contents, separated by commas\n",
    // How to install
    // Listed below
    // Usage y/n
    "How would you describe using this project?\n",
    // Images y/n
    "Would you like to include any images?\n",
    // "How many images?",
    // "Please provide the alt text for image number\n",
    // "Please provide the link for image number\n",
    //  Contributors commas
    "Insert any contributors that assisted with the project\n",
    // License y/n
    "Enter a license used\n",

    "Please enter your GitHub username\n",
    "Please enter the link to your Github\n",
    "Please enter your email address\n",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

const howToInstall = [
    `
    1. Navigate to the code repository
    2. Press the green code button, located near the about section
    3. Copy either the HTTPS, Git CLI, download the zip, open with GitHub desktop, or copy the SSH link.
    4. Depending on download method, use Git, executable, or the desktop application to open the content files.
    5. All of the content of the repository will be available after completion of the previous state.
    `
];

const prompt = inquirer.createPromptModule();



prompt([ {

    "name": "title",
    "message": questions[0],
    "type": "input"
}, {
    "name": "author",
    "message": questions[1],
    "type": "input"
},  {
    "name": "describeFunction",
    "message": questions[2],
    "type": "input"
},  {
    "name": "describeMotivation",
    "message": questions[3],
    "type": "input"
},  {
    "name": "describeTechnologies",
    "message": questions[4],
    "type": "input"
},  {
    "name": "describeChallenges",
    "message": questions[5],
    "type": "input"
},  {"name": "futureGoals",
    "message": questions[6],
    "type": "input"
},  {
    "name": "yesTableOfContents", // type: confirm
    "message": questions[7],
    "type": "input"
},  {
    "name": "describeUsage",
    "message": questions[8],
    "type": "input"
}
]).then( (answers) => {
    let data = generateMarkdown([answers, howToInstall]);


}).catch( (error) => {
    console.log('An error occured, please try again');
    console.log(error);
});



const imgPrompt = () => {

}

