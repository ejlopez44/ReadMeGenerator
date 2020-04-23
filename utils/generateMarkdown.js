function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.desc}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
\`\`\`
${data.runInstall}
\`\`\`

## Usage

${data.instructions}

## License

This project is protected under the ${data.license}.

## Contributing

${data.contribution}

## Tests

To run tests, run the following command:
\`\`\`
${data.runTest}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact ${data.gitUser} directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
