import { MongoClient } from "mongodb";
import express from 'express';

const PORT = 3000;
const app = express();

const MONGO_URL = "mongodb://root:example@localhost:27017/";
const DB_NAME = 'new_database';
const COLLECTION_NAME = 'test_collection';


let db, collection;

MongoClient.connect(MONGO_URL, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
    return;
  }

  console.log('Connected to MongoDB');
  db = client.db(DB_NAME);
  collection = db.collection(COLLECTION_NAME);
});

// Define the endpoint
app.get('/hello', (req, res) => {
    
    if (!db) {
        res.status(500).send({ error: 'Database not initialized, no db' });
        return;
    }

    if (!collection) {
        res.status(500).send({ error: 'Database not initialized, no collection' });
        return;
    }

    res.send('hello');
    
    const message = { string: 'hello!' };

    collection.insertOne(message, (err, result) => {
        if (err) {
        res.status(500).send({ error: 'Failed to insert record.' });
        return;
        }

        res.status(201).send({ message: 'Record added successfully!', record: result.ops[0] });
    });

    
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});