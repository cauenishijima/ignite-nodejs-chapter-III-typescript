import express from 'express';

import { createCourse } from './routes';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

app.get('/course', createCourse);

app.post('/course', (request, response) => {
  const { name } = request.body;

  return response.json({ message: name });
});

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
