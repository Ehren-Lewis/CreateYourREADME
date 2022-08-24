
// TODO: Create an array of questions for user input

import inquirer from "inquirer";

const questions = [
    // Author
    "Who is the author of the README?\n",
    // About this Project
    "What does your application do?\n",
    "What was your motivation behind the project?\n",
    "Why did you use the technologies you used?\n",
    "What're some challenges you faced during creation?\n",
    "What're your goals for future implications?\n",
    // Table of Contents 
    "Would you like a table of contents?",
    // How to install
    // Listed below
    // Usage
    "How would you describe using this project?\n",
    // Images
    "Would you like to include any images?\n",
    // "How many images?",
    // "Please provide the alt text for image number\n",
    // "Please provide the link for image number\n",
    "Were there any other contributors in this project?\n",
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


// Author 
const setAuthor = () => {
    let tempAuthor = readline.question(questions[0]);
    if (readline.keyInYN(`Is ${tempAuthor} the proper name?\n`)) {
        console.log(`Setting author as... ${tempAuthor}\n`);
        return tempAuthor
    } else {
        console.log("Trying again...\n");
        setAuthor();

    }
}

// About this project


// const describeApplication = () => {
//     let tempDescription = readline.question(questions[1]);
//     return tempDescription;
//     // Do later 
// }

// const describeMotivation = () => {
//     let tempMotivation = readline.question(questions[2]);
// }

// const describeChallenges = () => {
//     let tempChallenges = readline.question(questions[3]);
// }

// const describeTechnologies = () => {
//     let tempTechnologies = readline.question(questions[4]);
// }

// const describeFutureGoals = () => {
//     let tempGoals = readline.question(questions[5]);
// }

// // Table of Contents 
// const describeTOC = () => {
//     // let tempTOC = readline.question(questions[6]);
//     if (readline.keyInYN(questions[6])) {

//     } else {
//         return;
//     }
// }

// // Usage 
// const describeUsage = () => {
//     let tempUsage = readline.question(questions[7]);
// }

// // Usage Images 
// const describeImgaes = () => {
//     // let tempImages = readline.question(questions[8]);
//     if (readline.keyInYN(questions[8])) {

//     } else {
//         return;
//     }
// }

// // Contributors 
// const describeContrubutors = () => {
//     // let tempContributors = readline.question(questions[9]);
//     if (readline.keyInYN(questions[9])) {

//     } else {
//         return;
//     }
// }

// // License 
// const describeLicense = () => {
//     // let tempLicense = readline.question(questions[10]);
//     if (readline.keyInYN(questions[10])) {
        
//     } else {
//         return;
//     }
// }

// console.log(inquire);

// inquire.readline

const prompt = inquirer.createPromptModule();



prompt([{
    name:'Author',
    message: questions[0],
    // type: "editor"
    type: "input"
},
{name: "describeApplication",
message: questions[1],
type:"input"

}]).then ( (value ) => {
    console.log(value);
}, (error) => {
    console.log(error)
})

// socket io vs websockets 