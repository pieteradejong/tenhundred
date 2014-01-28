var express = require("express");
var app = express();
app.use(express.json());

var words = require("./words");

app.get('/', function(req, res){
  res.sendfile('./index.html');  
});
app.post('/', function(req, res){
  console.log("is array: ", Array.isArray(req.body));
  var parsedWords = getCommonWords(req.body);
  console.log("these are the parsed words: ", parsedWords);
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
