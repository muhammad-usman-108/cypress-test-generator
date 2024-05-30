

const { generateCypressTest, formatCode, writeTestFile } = require('./index');

// Example HTML code block
const htmlCode = `
<html>
    <body>
        <div id="header">Header</div>
        <div id="content" class="main-content">Content</div>
        <button onclick="alert('Clicked!')">Click Me</button>
        <input type="text" value="Test Value" />
        <textarea>Some text</textarea>
        <p class="description">Description text</p>
    </body>
</html>
`;

const testName = 'Sample Test';
const testCode = generateCypressTest(htmlCode, testName);
//const formattedCode = formatCode(testCode);
const formattedCode = formatCode(testCode).then(result => writeTestFile(result, 'sampleTest.spec.js'));


//writeTestFile(formattedCode, 'sampleTest.spec.js');

