const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/hello-world', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/hello-universe', (req, res) => {
  res.json({ message: 'Hello Universe!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
