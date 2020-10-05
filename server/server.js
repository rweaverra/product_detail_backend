const express = require('express');

const app = express();
const PORT = 3030;

app.use(express.static('../client/dist'));

app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});
