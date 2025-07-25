// const express = require('express');
// const cors = require('cors');
// const serverless = require('serverless-http');

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/hello-world', (req, res) => {
//   res.json({ message: 'Hello World!' });
// });

// app.get('/hello-universe', (req, res) => {
//   res.json({ message: 'Hello Universe!' });
// });

// module.exports = serverless(app);

export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Vercel Node.js API!" });
}
