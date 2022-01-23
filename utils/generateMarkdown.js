// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Title: ${data.projTitle} 

![badge](https://img.shields.io/badge/license-${data.license}-darkred)


## Description:

${data.description}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation Instructions:

Installation instructions: ${data.installInstructions}

## Usage:

Usage instructions: ${data.usageInstructions}

## Contributing:

Want to contriubte? Here's the guidelines: ${data.contributionInstructions}

## Tests:

Current test instructions: ${data.tests}

## License:

This application is covered under the ${data.license} license. 

## My Github Account:

  Click here: https://github.com/${data.github}

## Questions:

  Feel free to email me at: ${data.email}
  
`;
}

module.exports = generateMarkdown;