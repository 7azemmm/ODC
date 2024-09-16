import { Component, OnInit , inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit{


   product_arr : any[] = [];

   constructor(private httpClient: HttpClient) {}

   httpclient = inject(HttpClient);
   
   fetchData(){
    this.httpClient.get('https://fakestoreapi.com/products').subscribe((Response :any)=>
    this.product_arr=Response)}

    // console.log(product_arr));
  
   ngOnInit(): void {
     this.fetchData();
   }


}
