console.log("LOG: Running replaceWords.js");

//uncomment this to test it!!

// findAndReplaceDOMText(document.body, {
//   find: 'wiki',
//   replace: 'COCONUT',
//   wrap: 'em',
//   wrapClass: 'Shiny'
// });

// console.log(makeArrayAndReturnObject());

function makeArrayAndReturnObject() {
  var res = $('body  *').contents().map(function () {
      if (this.nodeType == 3 && this.nodeValue.trim() != "") //check for nodetype==3 which is text and ignore empty text nodes
          return this.nodeValue.trim().split(/\W+/);  //split the nodevalue to get words.
  }).get(); //get the array of words.
  for (i = 0; i < res.length; i++){
    res[i] = res[i].toLowerCase();
  }
  var wordObj = _.countBy(res);
  var sortable = [];
  for (var word in wordObj) {
      sortable.push([word, wordObj[word]]);
  }

  sortable.sort(function(a, b) {
      return b[1] - a[1];
  });

  return sortable;
  // let uniq_out = [...new Set(res)]; //deletes duplicate elements
  // return uniq_out;
}

function replaceWord(initialWord, newWord){
  findAndReplaceDOMText(document.body, {
    find: initialWord,
    replace: initialWord + " " + newWord,
    wrap: 'span',
    wrapClass: 'lovelangReplace'
    }
  );
}

replaceWord("wiki", "how");

function translateWord(originalWord, languageCode) {
  finalTranslation = "";
  var url = "https://translation.googleapis.com/language/translate/v2";
  //Strings requiring translation
  url += "?q=" + originalWord;
  url += "&target=" + languageCode;
  //Replace with your API key
  url += "&key=AIzaSyBPsptbtoOIk6GVvZZvtn2P6mbDzHp9ZoE";
  $.get(url, function (data, status) {
      //Results are returned in an array following the order they were passed.
      this.finalTranslation = data.data.translations[0].translatedText;
  });
  return finalTranslation;
}

var arr = makeArrayAndReturnObject();

var translatedArr = [];


// Add CSS to the second element in the replace things
var toBold = document.getElementsByClassName('lovelangReplace');

for (var i = 0 ; i< toBold.length; ++i) {
  var temp = toBold[i].innerText;
  temp = temp.replace(' ', "'>");
  toBold[i].innerHTML = "<p style='display:inline;' data-tooltip='" + temp + "</p>";
  console.log("<p data-tooltip='" + temp + "</p>");
}
