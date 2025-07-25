import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello-world', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/hello-universe', (req, res) => {
  res.json({ message: 'Hello Universe!' });
});

export const handler = serverless(app);
