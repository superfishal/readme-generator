// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderLicense(license) {
  switch (license) {
    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    default:
      return `u hacker fuck off`;
  }
}

// TODO: Create a function to generate markdown for README
// Markdown is generated from template literal 'data' of various names of questions asked
function generateMarkdown(data) {
  return `# ${data.project} - ${renderLicense(data.license)}
  **${data.description}**

  *Languages Used: ${data.tech}*

  ## Table of Contents

  ### Installation Instructions:

  ${data.install}

  ### Usage Instructions:

  ${data.usage}

  #### Contributor Guidelines:

  ${data.contribute}

  #### Testing Instructions:
  
  ${data.test}

  ----------------------------------------------------------------

  #### Questions?

  ${data.email}
  ${data.github}

  `;
}

module.exports = generateMarkdown;
