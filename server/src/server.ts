import express from 'express';
import { apiRouter } from './api';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/', apiRouter);

app.listen(PORT, '0.0.0.0', () => console.log('Server running on all network interfaces'));
