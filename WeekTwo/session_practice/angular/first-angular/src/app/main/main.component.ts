import { Component } from "@angular/core";

@Component({
    standalone:true,
    styleUrl:'./main.component.css',
    templateUrl:'./main.component.html',
    selector:'main-component'
})

export class MainComponent{
day = "white";
night = "black";
count =1;
isNight = false;
counter =()=>{
    this.count +=25;
}
mainImage = 'https://iili.io/HnylxDb.jpg';
firstImage='https://iili.io/HnylIxj.jpg';
secondImage='https://iili.io/HnyloOu.jpg';
thirdImage = 'https://iili.io/HnylTWx.jpg';
fourthImage = 'https://iili.io/HnylxDb.jpg';



  // Method to set the source image
  sourceImage(img_url : string) {
   this.mainImage  = img_url ; // or any other image URL you want to set
  }



}