function kabobCase(license) {
  const licenseCase = license.split(' ').join('%20')
  return licenseCase
}

function generateMarkdown(data) {

  let licenseName = (kabobCase(data.license))

  return `
# ${data.title}

## Description

${data.gitURL}

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

This project is protected under the ![GitHub license](https://img.shields.io/badge/license-${licenseName}-blue.svg)

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
