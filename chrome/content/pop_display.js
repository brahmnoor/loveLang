import * from replaceWords.js;

var arr = makeArray();
var translatedArr = [];

for(i=0; i<arr.length; i++){
  translatedArr[i] = translateWord(arr[i], "fr"); //how jget lang code?/?????
}

for(j=0;j<arr.length;j++){
  document.write(arr[i] + " = " + translatedArr[i]);
  document.write("\n");
}
