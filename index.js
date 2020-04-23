const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const genMarkDown = require('./utils/generateMarkdown.js')

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "gitUser",
            message: 'What is your GitHub username?'
        },
        {
            type: "input",
            name: "email",
            message: 'What is your email?'
        },
        {
            type: "input",
            name: "gitURL",
            message: 'the URL to your project?'
        },
        {
            type: "input",
            name: "title",
            message: 'What is your project\'s name?'
        },
        {
            type: "input",
            name: "desc",
            message: 'Please write a short description of your project'
        },
        {
            type: "list",
            name: "license",
            message: 'What kind of license should your project have?',
            choices: ["MIT", 'APACHE 2.0', 'GPL 3.0', 'BSD 3.0', 'None']
        },
        {
            type: "input",
            name: "runInstall",
            message: 'What command should be run to install dependencies?',
            default: "npm install",
        },
        {
            type: "input",
            name: "runTest",
            message: 'What command should be run to run tests?',
            default: "npm test",
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


function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
}

async function init() {
    try {
        const answers = await promptUser();
        console.log(answers)
        const readme = genMarkDown(answers)

        await writeToFile('README.md', readme)

        console.log("Successfully created README.md");
    } catch (err) {
        console.log(err)
    }
}

init();
