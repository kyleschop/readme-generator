function generateMarkdown(data) {
  let licenseBadge = '';
  switch (data.license) {
    case 'none':
      console.log('none');
      licenseBadge = 'None'
      break;
    case 'MIT License':
      licenseBadge = '[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)'
      break;
  };
  return `# ${data.title}
${data.description}

## Table of Contents
---
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
---
${data.installation}

## Usage
---
${data.usage}

## License
---
${licenseBadge}

## Contributing
---
${data.contributing}

## Tests
---
${data.tests}

## Questions
---
https://github.com/${data.questionsGitHub}/

${data.questionsEmail}
`;
};

module.exports = generateMarkdown;