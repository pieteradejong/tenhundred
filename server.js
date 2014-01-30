var express = require("express");
var app = express();
app.use(express.json());

var words = require("./words");

app.get('/', function(req, res){
  res.sendfile('./index.html');  
});

app.post('/', function(req, res){
  var parsedWords = getCommonWords(req.body);
  res.send(parsedWords);
});

app.listen(8080);

var getCommonWords = function(wordList) {
  var commonWords = {};
  for(var i = 0; i < wordList.length; i++) {
    if(words[wordList[i]]) {
      commonWords[wordList[i]] = true;
    }
  }
  return commonWords;
}
