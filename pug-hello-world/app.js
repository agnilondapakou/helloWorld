const pug = require('pug');

// Compile the Pug template into HTML
const html = pug.renderFile('pug-hello-world/index.pug');

// Output the generated HTML to the console
console.log(html);
