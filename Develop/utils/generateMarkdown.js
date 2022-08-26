// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {return ""}


}

// TODO: Create a function to generate markdown for README

// Need to add boolImages, boolContribs, boolTOC, boolLicense

function generateMarkdown(data) {
  // return `# ${data.title}
  const [answers, readLineReturns, howToInstall]  = data;

 return `
  # ${answers.title}

  Author: ${answers.author}
  
  ${readLineReturns.tableOfContents.value ? "## Table Of Contents" : ""}

  ${readLineReturns.tableOfContents.value ? readLineReturns.tableOfContents.value : ""}
  
  ## About This Project

  ${answers.describeFunction}

  ${answers.describeMotivation}

  ${answers.describeTechnologies}

  ${answers.describeChallenges}

  
  ## How to Install

  ${howToInstall}

  ## Usage

  ${answers.describeUsage}

  ${readLineReturns.images.value ? readLineReturns.images.value : ""}

  ${readLineReturns.contributors.value ? `## Contributors` : ""}

  ${readLineReturns.contributors.value? readLineReturns.contributors.value : ""}

  ## Questions

  You can reach me at my Github: [${answers.githubUsername}](${answers.linkToGithub})

  ## OR

  You can reach me at my [${answers.email}](mailto:${answers.email}) pertaining any other questions you may have
  ` 


  ;
}

// const spreadHowTo = (arr) => {

// }

// module.exports = generateMarkdown;
export default generateMarkdown;

