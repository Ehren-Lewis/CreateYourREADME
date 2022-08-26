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
  

  // ## Table Of Contents

  ${readLineReturns.tableOfContents.state ? "## Table Of Contents" : ""}

  ${readLineReturns.tableOfContents.state ? readLineReturns.tableOfContents.value : ""}
  
  ## About This Project

  ${answers.desrcibeFunction}

  ${answers.describeMotivation}

  ${answers.describeTechnologies}

  ${answers.describeChallenges}

  
  ## How to Install

  ${howToInstall}

  ## Usage

  ${answers.describeUsage}

  ${readLineReturns.images.state ? readLineReturns.images.value : ""}

  ${readLineReturns.contributors.value ? `## Contributors` : ""}

  ${readLineReturns.contributors.state? readLineReturns.contributors.value : ""}
  ` 
  ;
}

// const spreadHowTo = (arr) => {

// }

// module.exports = generateMarkdown;
export default generateMarkdown;

