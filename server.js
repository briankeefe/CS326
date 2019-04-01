'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
// LOOK OVER THIS CODE
app.get('/api/issues', (req, res) => {
    db.collection('issues').find().toArray().then(issues => {
      const metadata = { total_count: issues.length };
      res.json({ _metadata: metadata, records: issues })
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
    
        const err = validateIssue(newIssue);
        if (err) {
            res.status(422).json({ message: `Invalid request: ${err}` });
            return;
        }
    
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
let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('issuetracker');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});