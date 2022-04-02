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
    name: "tech",
    message:
      "What did you use to make this project with? (Check all that apply?)",
  },
  {
    type: "list",
    name: "license",
    message: "What license",
    choices: ["ISC", "MIT", "Mozilla"],
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
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
