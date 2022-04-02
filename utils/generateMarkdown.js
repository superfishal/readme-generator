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
// Markdown is generated from template literal 'questionAnswers' of various names of questions asked
function generateMarkdown(questionAnswers) {
  return `# ${questionAnswers.project} - ${renderLicense(
    questionAnswers.license
  )}
  **${questionAnswers.description}**

  *Languages Used: ${questionAnswers.tech}*


  ## Table of Contents:
1. [Installation Instructions](#installation-instructions)
2. [Usage instructions](#usage-instructions)
3. [Contributor Guidelines](#contributor-guidelines)
4. [Testing instructions](#testing-instructions)
5. [Questions / Contact Information](#questions)
6. [Walkthrough Video / Screenshots](#walkthrough)  

  
  ### Installation Instructions:

  ${questionAnswers.install}  


  ### Usage Instructions:

  ${questionAnswers.usage}  


  ### Contributor Guidelines:

  ${questionAnswers.contribute}  


  ### Testing Instructions:
  
  ${questionAnswers.test}  


  ### Questions?

  <${questionAnswers.email}>

  Check out my **[Github](${questionAnswers.github})**  


  ### Walkthrough

  `;
}

module.exports = generateMarkdown;
