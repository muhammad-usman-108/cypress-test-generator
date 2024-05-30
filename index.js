const cheerio = require('cheerio');
const prettier = require('prettier');
const fs = require('fs');

// Function to escape single quotes in text
function escapeSingleQuotes(text) {
    return text.replace(/'/g, "\\'");
}

// Function to generate Cypress test code
function generateCypressTest(htmlCode, testName) {
    const $ = cheerio.load(htmlCode);
    let commands = [];

    // Loop through all elements in the HTML code
    $('*').each((i, el) => {
        const tagName = el.tagName;
        const id = el.attribs.id;
        const className = el.attribs.class;
        const onclick = el.attribs.onclick;
        const value = el.attribs.value;
        const text = escapeSingleQuotes($(el).text().trim().replace(/\s+/g, ' ')); // Replace newlines with spaces

        if (id) {
            commands.push(`cy.get('#${id}').should('exist');`);
        } else if (className) {
            commands.push(`cy.get('.${className.split(' ').join('.')}').should('exist');`);
        } else {
            commands.push(`cy.get('${tagName}').should('exist');`);
        }

        if (onclick) {
            commands.push(`cy.get('${tagName}${id ? `#${id}` : ''}${className ? `.${className.split(' ').join('.')}` : ''}')
                .click();`);
        }

        if (tagName === 'input' || tagName === 'textarea') {
            if (value) {
                commands.push(`cy.get('${tagName}${id ? `#${id}` : ''}${className ? `.${className.split(' ').join('.')}` : ''}')
                    .should('have.value', '${value}');`);
            }
        }

        if (tagName === 'button') {
            if (text) {
                commands.push(`cy.get('${tagName}${id ? `#${id}` : ''}${className ? `.${className.split(' ').join('.')}` : ''}')
                    .should('contain.text', '${text}');`);
            }
        }

        if (text && tagName !== 'button' && tagName !== 'input' && tagName !== 'textarea') {
            commands.push(`cy.get('${tagName}${id ? `#${id}` : ''}${className ? `.${className.split(' ').join('.')}` : ''}')
                .should('contain.text', '${text}');`);
        }
    });

    // Generate complete Cypress test code
    const testCode = `
    describe('${testName}', () => {
        it('should contain expected elements and attributes', () => {
            ${commands.join('\n            ')}
        });
    });
    `;

    return testCode;
}

// Function to format generated test code
function formatCode(code) {
    return prettier.format(code, { parser: 'babel' });
}

// Function to write test code to a file
function writeTestFile(testCode, filePath) {
    fs.writeFileSync(filePath, testCode);
    console.log(`Cypress test file generated at: ${filePath}`);
}

module.exports = { generateCypressTest, formatCode, writeTestFile };
