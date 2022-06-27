const express = require('express');
const cors = require('cors');
let app = express();
require('dotenv').config();
let port = process.env.PORT || 8000 

app.use(cors())
app.use(express.json())







app.get('/', (req, res) => {
    res.send('Server On Live')
})

app.listen(port, ()=> {
    console.log(' Mojar Dokan Server Running ')
})