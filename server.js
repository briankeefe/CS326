'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;


// LOOK OVER THIS CODE
//I changed records to assets, but im unsure how to test to see if its working. 
app.get('/api/issues', (req, res) => {
    db.collection('issues').find().toArray().then(issues => {
      const metadata = { total_count: issues.length };
      res.json({ _metadata: metadata, assets: issues })
    }).catch(error => {
      console.log(error);
      res.status(500).json({ message: `Internal Server Error: ${error}` });
        });
});
app.post('/api/issues', (req, res) => {
    const newIssue = req.body;
    newIssue.created = new Date();
    if (!newIssue.status)
        newIssue.status = 'New';
    // we do not need this as of now, posibly implement a valid entry later
       // const err = validateIssue(newIssue);
        //if (err) {
         //   res.status(422).json({ message: `Invalid request: ${err}` });
          //  return;
       // }
    
        db.collection('issues').insertOne(newIssue).then(result =>
        db.collection('issues').find({ _id: result.insertedId }).limit(1).next()
        ).then(newIssue => {
        res.json(newIssue);
        }).catch(error => {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error: ${error}` });
    });
});
  
  

//
//old code
//app.listen(3000, function () {
//    console.log('App started on port 3000');
//});

//I changed the db to SaveMe
let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('SaveMe');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});