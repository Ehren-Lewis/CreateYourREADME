// TODO: Include packages needed for this application

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const readline = require('readline-sync');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    // Author
    "Who is the author of the README?",
    // About this Project
    "What does your application do?",
    "What was your motivation behind the project?",
    "Why did you use the technologies you used?",
    "What're some challenges you faced during creation?",
    "What're your goals for future implications?",
    // Table of Contents 
    ["Would you like a table of contents?"],
    // How to install
    // Listed below
    // Usage
    "How would you describe using this project?",
    // Images
    "Would you like to include any images?",
    "How many images?",
    "Please provide the alt text for image number",
    "Please provide the link for image number",
    "Would you like to include a license?"

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


// console.log(howToInstall);

const createAuthor = () => {
    console.log
}

const names = readline.question('Who is the author?');

console.log(names);
