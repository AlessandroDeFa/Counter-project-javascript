const dcbutton = document.querySelector('.dc-button');
const icbutton = document.querySelector('.ic-button');
const resetbutton = document.querySelector('.icon-reset');
const number = document.querySelector('.container-number');

let counter = 0;
number.innerHTML = counter;

icbutton.addEventListener('click', function(){
  counter++;
  number.innerHTML = counter;
  if(counter > 0 ){
    number.style.color = 'green';
  }
  if(counter === 0){
    number.style.color = 'black';
  }
})

dcbutton.addEventListener('click', function(){
  counter--;
  number.innerHTML = counter;
  if(counter < 0 ){
    number.style.color = 'red';
  }
  if(counter === 0){
    number.style.color = 'black';
  }
})

resetbutton.addEventListener('click', function(){
  counter = 0;
  number.innerHTML = counter;
  number.style.color = 'black';
  
})