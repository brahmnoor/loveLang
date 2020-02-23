console.log("LOG: Running replaceWords.js");

function makeArray(){
  var res = $('body  *').contents().map(function () {
      if (this.nodeType == 3 && this.nodeValue.trim() != "") //check for nodetype==3 which is text and ignore empty text nodes
          return this.nodeValue.trim().split(/\W+/);  //split the nodevalue to get words.
  }).get(); //get the array of words.

  let uniq_out = [...new Set(res)]; //deletes duplicate elements
  return uniq_out;
}

function replaceWord(initialWord, finalWord){

    if (document.readyState === "complete") {
      $("body").children().each(function () {
      $(this).html( $(this).html().replace(/initialWord/gi,finalWord) );
      });
    } else {
        setTimeout('checkLoad();', 500)
    }
}

function translateWord(originalWord, languageCode) {
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
