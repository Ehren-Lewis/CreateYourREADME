
import readline from 'readline-sync';
import inquirer from 'inquirer';
import fs, { read, realpath } from 'fs';
import utilsFunctions from './utils/generateMarkdown.js';
const {generateMarkdown, renderLicenseLinkAndBadge, renderLicenseSection } = utilsFunctions;
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
    // Usage
    "How would you describe using this project?\n",
    // Images y/n
    "Would you like to include any images?\n",
    //  Contributors y/n
    "Would you like to include any contributors?\n",
    // License list
    "Please pick a license\n",

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

const howToInstall =
    `
    1. Navigate to the code repository
    2. Press the green code button, located near the about section
    3. Copy either the HTTPS, Git CLI, download the zip, open with GitHub desktop, or copy the SSH link.
    4. Depending on download method, use Git, executable, or the desktop application to open the content files.
    5. All of the content of the repository will be available after completion of the previous state.
    `
;

const setImages = (i) => {
    const currentAlt = readline.question(`What is the alt text? for image ${ i+ 1} `)
    const linkToImage = readline.question(`What is the link to image ${i + 1} `);
    return `![${currentAlt}](${linkToImage})\n`;
}

const boolImages = readline.keyInYNStrict("Would you like to include images")   ;
var returnImages = ``;
if (boolImages) {
    let numberOfImages = readline.question("how many images?\n");   
    for (let i = 0; i < numberOfImages; i++) {
        returnImages += setImages(i);
    }
}

const setContribs = (i) => {
    const contribName = readline.question(`What is the name of contributor ${i + 1}? `);
    return `${contribName}\n`;
}

const boolCredits = readline.keyInYNStrict("Would you like to include contributors in the credits??");
var returnCredits = ``;
if (boolCredits) {
    let numberofContribs = readline.question("How many contributors? ")
    for (let i = 0; i < numberofContribs ; i++) {
        returnCredits += setContribs(i);
    }
}

const boolTOC = readline.keyInYNStrict("Would you like to include a Table of Contents?");

const boolTests = readline.keyInYNStrict("Would you like to include how to run the tests if there are any? ");
var describeTests = ``;
if (boolTests) {
    describeTests = readline.question("Please input the description on how to test: ")
}

let tocStatic = `
* [About This Project](#about-this-project)
* [How to Install](#how-to-install)
* [Usage](#usage)
* [Known Issues](#known-issues)
${boolTests ? "* [Tests](#tests)" : ""}
${boolCredits ? "* [Credits](#credits)" : ""}
* [Questions](#questions)
* [License](#license)
* [Contributing](#contributing)
`

const readLineReturns = {
    "images": { 
        state: boolImages,
        value: returnImages,
    },
    "contributors": {
        state: boolCredits,
        value: returnCredits,
    },
    "tableOfContents": {
        state: boolTOC,
        value: tocStatic
    }, 
    "tests": {
        state: boolTests,
        value: describeTests
    }
}

const prompt = inquirer.createPromptModule();
prompt([ 
{
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
},   {
    "name": "describeUsage",
    "message": questions[8],
    "type": "input"
}, {
    "name": "chosenLicense",
    "message": questions[11],
    "type": "list",
    "choices": [
        "Apache", "BSD3", "GNU",
    "MIT", "MOZILLA", "ECLIPSE", "none"]
}, {
    "name": "yearForLicense",
    "message": "Please pick a year for the license",
    "type": "input"
},

{
    "name": "githubUsername",
    "message": "What is your Github",
    "type": "input"
}, {
    "name": "linkToGithub",
    "message": "Enter the link to your github",
    "type": "input"
}, {
    "name": "email",
    "message": "What is your email addess?",
    "type": "input"
}, {
    "name": "readMeFileName",
    "message": "enter the name of the file without the .md",
    "type": "input",
}, {
    "name": "issues",
    "message": "please describe any issues in the application",
    "type": "input"
},  {
    "name": "contributing",
    "message": "how can individuals contribute on this application",
    "type": "input"
}
]).then( (answers) => {
    let licenseBadge = renderLicenseLinkAndBadge(answers.chosenLicense);
    console.log(licenseBadge);
    let licenseSection = renderLicenseSection(answers.chosenLicense, answers.author, answers.yearForLicense);
    let licenseInformationCompleted = {licenseBadge, licenseSection};
    let data = generateMarkdown([answers, readLineReturns, howToInstall, licenseInformationCompleted]);

    fs.writeFile(`${answers.readMeFileName}.md`, data, (err) => {
        if (err) {
            console.log(err);
            console.log("Please try again")
        } else {
            console.log("SUCCESS");
        }
    })
})
.catch( (error) => {
    console.log('An error occured, please try again');
    console.log(error);
});
