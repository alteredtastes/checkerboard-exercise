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
  window.setInterval(changeColor, 2000);
}

gridbuild();
interval();
