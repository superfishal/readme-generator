// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project",
    message: "What is the name of the Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description",
  },
  {
    type: "input",
    name: "install",
    message: "Installation instructions?",
  },
  {
    type: "input",
    name: "tech",
    message: "What languages did you use to make this project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license",
    choices: ["ISC", "MIT", "Mozilla"],
  },
  {
    type: "input",
    name: "usage",
    message: "Usage instructions?",
  },
  {
    type: "input",
    name: "contribute",
    message: "Guidelines for conributors?",
  },
  {
    type: "input",
    name: "test",
    message: "Please outline testing instructions",
  },
  {
    type: "input",
    name: "github",
    message: "Github link for this project?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// initialized on "node index"
// inquirer prompts questions, then tales answers and synchorniously writes file,
// joining to the current working directories README file
// finally generating markdown with the questionAnswers
function init() {
  inquirer.prompt(questions).then((questionAnswers) => {
    // console.log(generateMarkdown(questionAnswers));
    fs.writeFileSync(
      path.join(process.cwd(), "README.md"),
      generateMarkdown(questionAnswers)
    );
  });
}

// Function call to initialize app
init();
