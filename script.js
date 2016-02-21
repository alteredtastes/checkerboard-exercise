var grid = [];
var body = document.getElementsByTagName('body')[0];

for (var i = 1; i <= 148; i++){
  grid[i] = document.createElement('div');
  grid[i].style.float = 'left';
  grid[i].style.width = '11.1%';
  grid[i].style.paddingBottom = '11.1%';

  if((i % 2) == 0){
    grid[i].style.background = 'red';
  }else{
    grid[i].style.background = 'black';
  }
  body.appendChild(grid[i]);
}
