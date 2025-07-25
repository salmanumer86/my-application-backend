import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());    

app.get('/api/hello-world', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/hello-universe', (req, res) => {
  res.json({ message: 'Hello Universe!' });
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
