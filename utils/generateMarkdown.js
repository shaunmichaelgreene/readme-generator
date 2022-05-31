// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Welcome to the README for ${data.title}  ${renderLicenseBadge(data.license)}
  [Live Deployed Link](${data.url})  
  ![screenshot of ${data.title}](${data.screenshot})

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Support](#support)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contrubtion}

  ## Tests
  ${data.test}

  ## Support
  For additional support or inquiries, please feel free to reach out! 

  GitHub: [${data.githubUser}](${data.githubLink})
  
  Email: ${data.email}

  ## License
  ### ${data.license}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
