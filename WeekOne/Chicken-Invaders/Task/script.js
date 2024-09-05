var container = document.querySelector(".chickens")

var rocket = document.querySelector('.rocket');

for(var i=0 ; i<70 ; i++){
   
    
    var im = document.createElement('img')
    im.src='./Images/Images/Chicken.png'

   
   container.append(im); 

}

var positonY = 0; // Correct spelling to 'positionY'
var positionX=0
window.addEventListener('keydown', function(e) {
  if (e.code === 'ArrowUp') {
    positonY += 10;
    rocket.style.bottom = positonY + 'px'; // Update bottom position dynamically
  }else if(e.code === 'ArrowDown'){
    positonY-=10
    rocket.style.bottom=positonY +'px';
    if(positionY <=10){
        positonY=10;
    }
  }
  else if(e.code === 'ArrowRight'){
    positionX+=10
    rocket.style.left=positionX +'px';
  }else if(e.code === 'ArrowLeft'){
    positionX-=10
    rocket.style.left=positionX +'px';
  }
});