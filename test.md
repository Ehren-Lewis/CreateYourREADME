
  # Complete README test

  Author: Ehren
  
  ## Table Of Contents

  
    * [About This Project](#about-this-project)
    * [How to Install](#how-to-install)
    * [Usage](#usage)
    
    * [Tests](#tests)
    * [Known Issues](#known-issues)
    * [Questions](#questions)



  
  ## About This Project

  It creates an automatically generated readme

  The motivation behind this project was as a software developer who would like to code efficiently, I do not want to spend my time working on creating a readme, allowing me to spend more time doing what I love

  I used JavaScript, Node, Inquirer, Readline-sync, and Inquirer. FS allows me to write to the readme file, as well as create it as a readme file, allowing for easy auomtation. Node is the backend that has helped me manage my package by using NPM. I used inquirer to allow for a nice user infterface with many questions, and I usd Readline-sync to handle anything that needs to be more dynamically created or is more variable, such as the number of contributors, the number of images liked to be linked, and if they would like to include testing

  Some challenges I faced during the process of creating this application was the asynchronous functionality of the Inquirer package. When I would wait for the user input, the rest of the JavaScript file would run, so the Promise would still be pending. I also faced some challenges on needed prompts to activate only if a condition is met, but using the .then of promises would cause a challenge as well

  
  ## How to Install

  
    1. Navigate to the code repository
    2. Press the green code button, located near the about section
    3. Copy either the HTTPS, Git CLI, download the zip, open with GitHub desktop, or copy the SSH link.
    4. Depending on download method, use Git, executable, or the desktop application to open the content files.
    5. All of the content of the repository will be available after completion of the previous state.
    

  ## Usage

  To use this project, follow the installation steps. Once that is done, launch the index.js file in order to start the process of creating your automatic readme. Follow all the prompts asked, and it is useful to know how many images you want to include, as well as having their image path ready as well will help with usage. This application is designed for software developers that want to automate a part of their coding

  ![alt1](./a)
![alt2](./b)


  

  

  ## Tests

  In order to test this applicaion, just launch it

  ## Known Issues

  There is an issue if the user wants to leave and continue later. They will also have to completely restart. There is another issue where is the user inputs a .md in the file name prompt, it will also cause an issue. Another issue is if individuals input blank messages when their truthyness is checked by a different variable

  ## Questions

  You can reach me at my Github: [Ehren-Lewis](https://github.com/Ehren-Lewis)

  ## OR

  You can reach me at my [email@email.com](mailto:email@email.com) pertaining any other questions you may have
  