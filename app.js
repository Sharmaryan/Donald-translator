let button = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-input");
let outputDiv = document.querySelector("#output");
let serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler() {
  alert("something went wrong with the server");
}
function clickHandler() {
  let inputText = textInput.value;
  fetch(getTranslationURL(inputText))
    .then((reponse) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}
button.addEventListener("click", clickHandler);
