const { generateCypressTest, formatCode, writeTestFile } = require('./index');

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

