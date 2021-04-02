require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const ctrl = require('./controller');

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

app.get('/api/products', ctrl.readProducts)
app.get('/api/products/:id', ctrl.readProduct)
app.post('/api/products/', ctrl.createProduct)
app.put('/api/products/:id', ctrl.updateProduct)
app.delete('/api/products/:id', ctrl.deleteProduct)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))
}).catch(err => console.log(err));
