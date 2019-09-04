const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors());
app.use('/api/listing/:id', express.static('public'));
app.use('/', express.static('public'));

app.listen(port, () => {
  console.log('Listening on 3000');
});