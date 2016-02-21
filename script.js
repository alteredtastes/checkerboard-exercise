var grid = [];
var body = document.getElementsByTagName('body')[0];
var op = 0;


for (var i = 1; i <= 148; i++){
  grid[i] = document.createElement('div');
  grid[i].style.float = 'left';
  grid[i].style.width = '11.1%';
  grid[i].style.paddingBottom = '11.1%';


  if((i % 2) == 0){
    grid[i].style.background = 'rgb(255,0,0)';
  }else{
    grid[i].style.background = 'rgb(0,0,0)';
  }

    op += 0.01;
    grid[i].style.opacity = op;


  body.appendChild(grid[i]);
}
