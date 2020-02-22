console.log("LOG: Running replaceWords.js");

var res = $('body  *').contents().map(function () {
    if (this.nodeType == 3 && this.nodeValue.trim() != "") //check for nodetype==3 which is text and ignore empty text nodes
        return this.nodeValue.trim().split(/\W+/);  //split the nodevalue to get words.
}).get(); //get the array of words.

let uniq_out = [...new Set(res)];
console.log(uniq_out);


// var all = document.body.innerText;
// $('body').text();
