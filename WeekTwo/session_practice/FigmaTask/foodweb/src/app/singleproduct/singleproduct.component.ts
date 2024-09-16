import { Component ,input } from '@angular/core';

@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent {
  productId= input.required<string>();
  //pattern = /^[a-zA-Z]+$/;
}
