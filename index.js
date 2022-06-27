const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
let app = express();
require('dotenv').config();
let port = process.env.PORT || 8000 

app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.n5jea.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run () {
    try {
        await client.connect();
        let vegetablesDb = client.db('mojarVejetables').collection('vegetables');


        app.get('/vegetables', async(req, res) => {
            let data = await vegetablesDb.find().toArray();
            res.send(data);
        })


    }
    finally{

    }
} 




app.get('/', (req, res) => {
    res.send('Server On Live')
})

app.listen(port, ()=> {
    console.log(' Mojar Dokan Server Running ')
})