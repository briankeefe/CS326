'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;


// LOOK OVER THIS CODE
//I changed records to assets, but im unsure how to test to see if its working. 
app.get('/api/SaveMe', (req, res) => {
  db.collection('SaveMe').find().toArray().then(issues => {
    const metadata = {
      total_count: issues.length,
      bank: 0
    };
    res.json({
      _metadata: metadata,
      assets: issues
    })
  }).catch(error => {
    console.log(error);
    res.status(500).json({
      message: `Internal Server Error: ${error}`
    });
  });
});
app.post('/api/SaveMe', (req, res) => {
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
  

  db.collection('SaveMe').insertOne(newIssue).then(result =>
    db.collection('SaveMe').find({
      _id: result.insertedId
    }).limit(1).next()
  ).then(newIssue => {
    res.json(newIssue);
  }).catch(error => {
    console.log(error);
    res.status(500).json({
      message: `Internal Server Error: ${error}`
    });
  });
});

app.post('/api/SaveAll', (req, res) => {
  console.log("start-----------------")
  let list = req.body;
  console.log("List: ", list);
  let ending = []
  for(let i = 0; i < list.length; i++){
    console.log("Run ", i, list[i].category)
    db.collection('SaveMe').updateOne({category: list[i].category}, 
      {$set: {category: list[i].category, 
        budget: list[i].budget, 
        flow: list[i].flow}}).then(ans => {
          if(ans.result.ok && ans.result.n){
            console.log("Accepted ", list[i].category);
            ending.push(list[i])
          }else{
            console.log("Rejected")
          }
        }).catch (error => {
          console.log("SAVEALL ERROR")
          res.status(500).json({
            message: `Internal Server Error: ${error}`
          })
        })
  }
  setTimeout(() => {
    console.log("ENDING:", ending)
    if(ending.length > 0){
      res.json({
        failure: "False",
        results: ending
      })
    }else{
      res.json({
        failure: "TRUE",
        results: ending
      })
    }
  }, 500)
})

app.post('/api/Money', (req, res) => {
  const cash = req.body.money;
  if(isNaN(cash)){
    console.log("NOT NUMBER")
    return;
  }
  console.log("Updating without filter")
  db.collection('Money').updateOne({}, { $set: {money: cash}}).then(result => {
    res.json({
      success: true,
      money: cash
    })
  }).catch(err => err);
})

app.get('/api/Money', (req, res) => {
  db.collection('Money').find().toArray().then(info => {
    if(info.length == 0){
      console.log("QUICKFIX ACTIVATED => MONEY SET TO 0 IN CASE OF NO INFO")
      db.collection('Money').insertOne({
        money: 0
      })
      info = db.collection('Money').find().toArray()
    }
    res.json({
      money: info[0].money
    })
  }).catch(error => {
    console.log(error);
    res.status(500).json({
      message: `Internal Server Error: ${error}`
    });
  });
})


//
//old code
//app.listen(3000, function () {
//    console.log('App started on port 3000');
//});

//I changed the db to SaveMe
let db;
MongoClient.connect('mongodb://localhost', {
  useNewUrlParser: true
}).then(connection => {
  db = connection.db('SaveMe');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});