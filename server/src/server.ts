import express from 'express';
import { apiRouter } from './api';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
