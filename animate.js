const button = document.getElementById('play-button');
const howToText = document.querySelector('#howto > p');
const fingerMe = document.querySelector('#finger > img');

setTimeout(function(){
  button.classList.add("appear");
},3000);

setTimeout(function(){
  howToText.classList.add("appear");
  fingerMe.classList.add("appear");
  console.log(howToText);
},4000);

console.log(fingerMe);
