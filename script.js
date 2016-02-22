var grid = [];
var body = document.getElementsByTagName('body')[0];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gridbuild() {
  for (var i = 1; i <= 148; i++){
    grid[i] = document.createElement('div');
    grid[i].style.float = 'left';
    grid[i].style.width = '11.1%';
    grid[i].style.paddingBottom = '11.1%';
    grid[i].style.background = 'rgb(' + getRandomIntInclusive(0, 255) + ',' + getRandomIntInclusive(0, 255) + ',' + getRandomIntInclusive(0, 255) + ')';
    body.appendChild(grid[i]);
}}

function changeColor() {
  for (var i = 1; i <= grid.length; i++) {
    grid[i].style.background = 'rgb(' + getRandomIntInclusive(0, 255) + ',' + getRandomIntInclusive(0, 255) + ',' + getRandomIntInclusive(0, 255) + ')';
  }
}

function interval(){
  window.setInterval(changeColor, 100);
}

function audio(){
  var ctx = new AudioContext();
  var sine = ctx.createOscillator();
  sine.frequency.value = 220;
  var sinemod = ctx.createOscillator();
  var sinegain = ctx.createGain();

  sine.connect(sinegain);
  sinegain.connect(ctx.destination);
  sine.start();
  sinemod.frequency.value = 12;
  sinemod.connect(sinegain.gain);
  sinemod.start();


  var saw = ctx.createOscillator();
  saw.type = 'sawtooth';
  saw.frequency.value = 100;
  var sawmod = ctx.createOscillator();
  var sawgain = ctx.createGain();

  saw.connect(sawgain);
  sawgain.connect(ctx.destination);
  saw.start();
  sawmod.frequency.value = 0.8;
  sawmod.connect(sawgain.gain);
  sawmod.start();


  var square = ctx.createOscillator();
  square.type = 'square';
  square.frequency.value = 60;
  var squaremod = ctx.createOscillator();
  var squaregain = ctx.createGain();

  square.connect(squaregain);
  squaregain.connect(ctx.destination);
  square.start();
  squaremod.frequency.value = 2;
  squaremod.connect(square.frequency);
  squaremod.start();
}

gridbuild();
interval();
audio();
