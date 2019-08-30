const express = require('express')
const app = express()
const path = require("path"); // window or mac
const router = express.Router();
const port = 4000
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
var str = "";
let count = 1;

// app.route('/').get(function(req, res) {
//     MongoClient.connect(url, function(err, client) {
//       var db = client.db('football_line');
//       var collection = db.collection('players');
//       var cursor = collection.find({});
//       str = "";
//
//       cursor.forEach(function(item) {
//         if (item != null) {
//           str = `    <td>${count}</td>
//                      <td>${item.name}</td>
//                      <td>${item.wins}</td>
//                      <td>${item.totalPoints}</td>`
//           document.getElementById(count).innerHTML = str;
//           count++;
//         }
//       },   function(err) {
//           re.send(str);
//           db.close();
//         }
//       );
//     });
//   });

app.route('/scores').get(function(req, res) {
  MongoClient.connect(url, function(err, client) {
    console.log("Connected to Database!");
    var db = client.db('football_line');
    var collection = db.collection('players');
    var cursor = collection.find({});
    str = "";
    cursor.forEach((item) => {
      if (item != null) {
        var dataToSendToClient = item;
        var JSONdata = dataToSendToClient;
        res.send(JSONdata);
      }
    });
  });
});

// MongoClient.connect(url, function(err, db) {
//   console.log("Connected to Database!");
//   db.close();
// });

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
})

// router.get('/css', (req, res) => {
//     res.sendFile(path.join(__dirname, '/styles.css'));
// })
//
// router.get('/img', (req, res) => {
//     res.sendFile(path.join(__dirname, '/images'))
// })

app.use(express.static('public'));
app.use(express.static('js'));
app.use(express.static('json'));
app.use(express.static('images'));
app.use(express.static('images/logos'));



app.listen(port, () => console.log(`app listening on port ${port}!`))

app.use('/', router);
