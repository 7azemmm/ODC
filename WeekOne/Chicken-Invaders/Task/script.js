var container = document.querySelector(".chickens")

var rocket = document.querySelector('.rocket');

var c=document.querySelector(".container")
var cont_Size=c.getBoundingClientRect()
console.log(cont_Size);

for(var i=0 ; i<70 ; i++){
   
    
    var im = document.createElement('img')
    im.src='./Images/Images/Chicken.png'
   
   container.append(im); 

}

var positionY = 0; 
var positionX=0
window.addEventListener('keydown', function(e) {
  if (e.code === 'ArrowUp') {
    positionY += 10;
    rocket.style.bottom = positionY + 'px'; 


    if(positionY>=cont_Size.height-230){
      positionY=cont_Size.height-230;
    }
    
  }else if(e.code === 'ArrowDown'){
    positionY-=10
    rocket.style.bottom=positionY +'px';
    if(positionY <=10){
        positionY=10;
    }
  }
  else if(e.code === 'ArrowRight'){
    positionX+=10
    rocket.style.left=positionX +'px';

    if(positionX>= cont_Size.width-100){
      positionX=cont_Size.width-100;
    }
    
  }else if(e.code === 'ArrowLeft'){
    positionX-=10
    rocket.style.left=positionX +'px';
    if(positionX<=0){
      positionX=0;
    }
  }else if(e.code === 'Space'){
    var bullet = document.createElement('img')

    bullet.src='./Images/Images/Bullet.png'

    bullet.classList.add('bullet')

    rocket.append(bullet)

    var positionB=0
    var bulletInterval = setInterval(function(){
     positionB+=10

      bullet.style.bottom=positionB+'px'

      if(positionB>1000){
        clearInterval(bulletInterval)
        rocket.removeChild(bullet)

      }

    } , 10 )

  }
});