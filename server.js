const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 10000;
const rootDir = __dirname;

app.use(express.static(rootDir, {
  index: false,
  extensions: ['html']
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'Capital Records.html'));
});

app.get('/Capital Records.html', (req, res) => {
  res.sendFile(path.join(rootDir, 'Capital Records.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(rootDir, 'Capital Records.html'));
});

app.listen(port, () => {
  console.log(`Capital Records portal running on http://localhost:${port}`);
});
