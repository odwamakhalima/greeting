var langItemTypeRadio = document.querySelector('.langItemTypeRadio')
var greetBtn = document.querySelector('.greetBtn')
var namesUpdate = document.querySelector('.namesUpdate')
var greetFinalElement = document.querySelector('.greetFinal')
var greetingsElem = document.querySelector('.greetingsCounter')
var myNames = ''
var English = 'Hello '
var Xhosa = 'Molo '
var Afrikaans = 'Hallo '
var greetingsCounter = 0;
var result = ''
var namesGreeted = {};
function greet(){
    myNames = namesUpdate.value
    var checkedRadioBtn = document.querySelector("input[name='langItemType']:checked");
    if (checkedRadioBtn){
    var langItemType = checkedRadioBtn.value
}
    if(langItemType === 'Xhosa'){
        result = Xhosa + myNames
    }
    else if(langItemType === 'English'){
        result = English + myNames
    }
    else if(langItemType === 'Afrikaans'){
        result = Afrikaans + myNames
    }
  if(typeof(Storage) !== undefined) {
    if(namesGreeted[myNames] === undefined) {
      greetBtn.addEventListener('click', function(){
        if (localStorage[namesGreeted]){
          greetingsCounter += greetingsCounter;
          localStorage[namesGreeted] = greetingsCounter;
          catsSpotted = Number(localStorage[namesGreeted]);
      }

    });
      namesGreeted[myNames] = 0;
      localStorage.greetingsCounter = Number(localStorage.greetingsCounter)+1;

    }
    greetingsElem.innerHTML =localStorage.greetingsCounter;
    console.log(greetingsCounter)
  }
  greetFinalElement.innerHTML = result
}
greetBtn.addEventListener('click', greet)
