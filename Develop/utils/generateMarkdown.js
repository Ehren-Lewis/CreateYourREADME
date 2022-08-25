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
  const [answers, howToInstall]  = data;

  const contribBool = Boolean(answers.letContribs)

  console.log( `
  # ${answers.title}

  Author: ${answers.author}
  

  ## Table Of Contents



  ## About This Project

  ${answers.desrcibeFunction}

  ${answers.describeMotivation}

  ${answers.describeTechnologies}

  ${answers.describeChallenges}

  
  ## How to Install

  ${howToInstall}

  ##Usage

  ${answers.describeUsage}

  

  ${contribBool ? `## Contributors` : ""}

  ${contribBool? returnContribs : ""}





  ` 
  );
}

const spreadHowTo = (arr) => {

}
















// module.exports = generateMarkdown;
export default generateMarkdown;

