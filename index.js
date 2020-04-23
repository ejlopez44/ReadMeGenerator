const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const genMarkDown = require('./utils/generateMarkdown.js')

// const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "gitName",
            message: 'What is your GitHub username?'
        },
        {
            type: "input",
            name: "gitURL",
            message: 'the URL to your project?'
        },
        {
            type: "input",
            name: "projName",
            message: 'What is your project\'s name?'
        },
        {
            type: "input",
            name: "desc",
            message: 'Please write a short description of your project'
        },
        {
            type: "input",
            name: "runInstall",
            message: 'What command should be run to install dependencies?'
        },
        {
            type: "input",
            name: "runTest",
            message: 'What command should be run to run tests?'
        },
        {
            type: "input",
            name: "instructions",
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: "input",
            name: "contribution",
            message: 'What does the user need to know about contributing to the repo?'
        },
    ]);
}


// function writeToFile(fileName, data) {
//     fs.writeFileSync('README.md', readme)
// }

async function init() {
    try {
        const answers = await promptUser();
        console.log(answers)
        // const readme = generateMarkdown(answers)
        // await writeToFile()
    } catch (err) {
        console.log(err)
    }
}

init();
