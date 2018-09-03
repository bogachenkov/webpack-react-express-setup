const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/user', (req, res) => {
  return res.json(os.userInfo());
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("public"));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  })
}

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));