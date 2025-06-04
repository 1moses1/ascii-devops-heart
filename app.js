const express = require('express');
const figlet = require('figlet');

const app = express();
const port = 3000;

// ASCII heart as a static string
const heart = `
  ******         ******
**********     **********
************* *************
*****************************
 ***************************
   *************************
     *********************
        ***************
           *********
              ***
               *
`;

app.get('/', (req, res) => {
  figlet.text('Moise Iradukunda ❤️ DevOps', { font: 'Standard' }, (err, asciiName) => {
    if (err) {
      return res.send('Error generating ASCII art.');
    }

    const html = `
      <html>
        <head>
          <title>Moise ❤️ DevOps</title>
        </head>
        <body style="background-color:black; color:red; font-family: monospace;">
          <pre>${asciiName}</pre>
          <pre>${heart}</pre>
          <p style="text-align:left;">Crafted with ❤️ and DevOps passion.</p>
        </body>
      </html>
    `;

    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`🚀 ASCII DevOps app running at http://localhost:${port}`);
});

