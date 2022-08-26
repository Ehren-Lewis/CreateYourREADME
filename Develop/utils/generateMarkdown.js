// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLinkAndBadge(license) {
  if (license == "none") {return ""}

  let licenseBadge = ``;

  switch (license) {

    case "APACHE":
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    break;

    case "BSD3":
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    break;

    case "GNU":
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    break;

    case "MIT":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;

    case "MOZILLA":
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    break;

    case "ECLIPSE":
    licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    break;
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name, year) {
  if (license == "none") {return ""}

  let licenseFileInformation = ``;
  // let licenseFileName = ``;
  switch (license) {

case "APACHE":

licenseFileInformation = `
Copyright [${year}] [${name}]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`

break;

case "BSD3":
licenseFileInformation = `
Copyright <${year}> <${name}>

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES 
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
break;

case "GNU":
licenseFileInformation = `    
<${name}>
Copyright (C) <${year}>  <${name}>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License`
  break;

case "MIT":
licenseFileInformation =  `
MIT License

Copyright (c) ${year} [${name}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`
break;

case "MOZILLA":
licenseFileInformation = `This Source Code Form is subject to the terms of the Mozilla Public License,
v. 2.0. If a copy of the MPL was not distributed with this file,
You can obtain one at https://mozilla.org/MPL/2.0/.`
break;

case "ECLIPSE":
licenseFileInformation = `THE ACCOMPANYING PROGRAM IS
PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE (“AGREEMENT”).
ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM 
CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT`
break;
  }
  return licenseFileInformation;
}

// TODO: Create a function to generate markdown for README

// Need to add boolImages, boolContribs, boolTOC, boolLicense

function generateMarkdown(data) {
  const [answers, readLineReturns, howToInstall, licenseInformation]  = data;

 return `
  # ${answers.title}
  ${licenseInformation.licenseBadge}

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

  ## Known Issues

  ${answers.issues}

  ${readLineReturns.tests.value ? `## Tests`: ""}

  ${readLineReturns.tests.value ? readLineReturns.tests.value : ""}

  ${readLineReturns.contributors.value ? `## Credits` : ""}

  ${readLineReturns.contributors.value? readLineReturns.contributors.value : ""}

  ## Questions

  You can reach me at my Github: [${answers.githubUsername}](${answers.linkToGithub})

  ### OR

  You can reach me at my [${answers.email}](mailto:${answers.email}) pertaining any other questions you may have
  
  ## License

  ${licenseInformation.licenseSection}

  ## Contributing

  ${answers.contributing}
`
  ;
}

export default {generateMarkdown, renderLicenseLinkAndBadge, renderLicenseSection};

