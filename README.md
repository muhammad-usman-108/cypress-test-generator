# cypress-test-generator

The cypress-test-generator is an NPM package that automatically generates Cypress tests based on provided HTML snippets. This tool is designed to streamline the process of writing end-to-end(e2e) tests by converting your HTML directly into Cypress test cases, saving you valuable time and ensuring more comprehensive test coverage.

## Features

**Automatic Test Generation**: Simply provide an HTML snippet, and the package will generate the corresponding Cypress test code.
**Ease of Use**: Simplifies the creation of Cypress tests, even for developers who are new to writing end-to-end tests.
**Customization**: The generated tests can be easily customized to fit specific testing needs.
**Integration**: Seamlessly integrates into your existing Cypress testing workflow.


Simply provide an HTML snippet and test name, description and instantly generate Cypress e2e test code for UI testing.

## Installation

You can install this package using npm or yarn.

### npm

```npm i cypress-test-generator```

### yarn

```yarn add cypress-test-generator``

## Usage

// Usage example

```typescript

import { generateCypressTest, formatCode, writeTestFile } from "cypress-test-generator";

// Example HTML code block
const htmlCode = `
<html>
    <body>
        <div id="header">Header</div>
        <div id="content" class="main-content">Content</div>
        <button id="testmeButton" onclick="alert('Clicked!')">Click Me</button>
        <button onclick="alert('Clicked!')">Click Me</button>
        <input type="text" value="Test Value" />
        <textarea>Some text</textarea>
        <p class="description">Description text</p>
    </body>
</html>
`;

const testName = 'Sample Test';
const description = 'should interact with the button'
const testCode = generateCypressTest(htmlCode, testName);
formatCode(testCode).then(result => writeTestFile(result, 'sampleTest.spec.js'));

// it will create a 'sampleTest.spec.js' file which contain the Cypress e2e test snippet
```

### Functions

| Function | Description |
|---------|---------|
| generateCypressTest | Function to generate Cypress test code. | 
| formatCode | Function to format generated test code. |
| writeTestFile | Function to write test code to a file. |



## Contributing
Contributions are welcome! If you have ideas for improvements or have found bugs, please open an issue or submit a pull request on GitHub. Feel free to add your name as well.

- [Muhammad Usman](https://github.com/muhammad-usman-108)

## Support

<p><a href="https://buymeacoffee.com/engrmuhammk"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="engrmuhammk" /></a></p><br><br> 


## LICENSE

This project is licensed under the MIT License - see the [LICENSE](https://github.com/muhammad-usman-108/cypress-test-generator/blob/main/LICENSE) file for details.