// TODO: Include packages needed for this application

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const readline = require('readline-sync');
const fs = require('fs');
const { default: inquirer } = require('inquirer');

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
    "Would you like a table of contents?",
    // How to install
    // Listed below
    // Usage y/n
    "How would you describe using this project?\n",
    // Images y/n
    "Would you like to include any images?\n",
    // "How many images?",
    // "Please provide the alt text for image number\n",
    // "Please provide the link for image number\n",
    //  Contributors y/n
    "Were there any other contributors in this project?\n",
    // License y/n
    "Would you like to include a license?\n"

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

const howToInstall = [
    "#How to Install",
    "1. Navigate to the code repository",
    "2. Press the green code button, located near the about section",
    "3. Copy either the HTTPS, Git CLI, download the zip, open with GitHub desktop, or copy the SSH link.",
    "4. Depending on download method, use Git, executable, or the desktop application to open the content files",
    "5. All of the content of the repository will be available after completion of the previous state.",
    "#OR",
    "1. Visit the live site",
    "2. Copy the files from the developer tools into your own files"
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
    "name": "desribeFunction",
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
    "name": "yesTableOfContents",
    "message": questions[7],
}

]).then( (answers) => {
    console.log(answers);
}).catch( (error) => {
    console.log('An error occured');
    console.assert(error);
});
