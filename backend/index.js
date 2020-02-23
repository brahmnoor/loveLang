const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

ObjectId = require('mongodb').ObjectID;

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

var db
// Remember to change YOUR_USERNAME and YOUR_PASSWORD to your username and password!
MongoClient.connect('mongodb+srv://main:GVmoZKKe8rbfGR5o@cluster0-nkyah.gcp.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
  if (err)
    return console.log(err)
  db = database.db('lovelang')
  // app.listen(process.env.PORT || 3000, () => {
  //   console.log('listening on 3000')
  // })
  const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`);
  });
})

app.get('/', (req, res) => {
  // res.send('Hello World!');
  db.collection('users').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
  res.send(result)
  })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
setlang receives the language for the current user, and initiates its collection
while returning the id attached with this user

req.body must have language

returns res, which has _id

*/

app.get('/setlang', (req, res) => {
  db.collection('users').insert(
     {
       "language": req.body.language,
       "wordsMastered": [],
     }, function(err, docsInserted) {
       res.send({
         "_id" : docsInserted["ops"][0]["_id"]
       });
     }
   )
});

/*

replace receives an array of words from the user which are the set of the words
that are on the webpage, and it then does some processing before returning
a set of [[word, mastering_level]] array which contains the words and the
mastering level attached with those words

req.body must have wordsSet which is a 2D array containing [word, count], and
it must have _id which uniquely identifies the user

returns res, which has replaceWords (a 2D array), language

*/
app.post('/replace/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  var cursor  = db.collection('users').findOne({_id : new ObjectId(req.params.id)},
    function(err, responseFromDb) {
      if (err)
        console.log(err);
      console.log(responseFromDb);
      res.send({"text" : "Hello"});
    }
  );
});
