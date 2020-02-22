const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

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
    res.send(result);
  })
});

app.post('/setlang', jsonParser, (req, res) => {
  // db.collection('users').insert(
  //   {
  //     language: req.body.language,
  //   }
  // )
  res.send(req.body);

});
