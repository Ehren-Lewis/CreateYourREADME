import inquirer from "inquirer";

inquirer.prompt([
    {
        name: "option",
        message: "Yo what up?",
        type: 'input'
    },
    {
        name: "moreOption",
        message: "Yo what uptwice?",
        type: 'input'
    },
    {
        name: "choice",
        type: "list",
        choices: [
            {
                name: "What you see",
                value: "What you get"
            },
            {
                name: "Image",
                value: "![alt text](relative-path)"
            },
            {
                name: "clownface",
                value: "\\1F921"
            },
        ]
    }
]).then(answers => {
    console.log(structure(answers))
})

function structure(obj) {
    return `
    This is my template
    
    ${obj.option}
    
    I am being written down ${obj.moreOption}
    
    ${obj.choice}`
}


// Start applying now for developer positions
// Local small companies 
// Target frontend

