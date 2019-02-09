const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');

const app = express();

app.use(bodyParser.json());


// ENDPOINTS //
app.get('/api/shoes', ctrl.getShoes);

app.post('/api/shoe', ctrl.newPurch);

app.put('/api/shoe/:id', ctrl.updateShoes);

app.delete('/api/shoe/:id', ctrl.deleteShoe)



const PORT = 4000;
app.listen(PORT, () => console.log(`Port ${PORT}, reporting for duty!`))