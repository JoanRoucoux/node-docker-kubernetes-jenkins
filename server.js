const express = require('express');

const app = express();
const port = 3000;

const todos = ['This is a task', 'This is another task', 'Again another task'];

app.get('/todos', (_req, res) =>
  res.status(200).json({
    data: todos,
    error: null,
  })
);

const server = app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

module.exports = server;
