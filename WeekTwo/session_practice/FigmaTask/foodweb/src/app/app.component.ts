import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HeaderComponent } from '../header/header.component';
import { NavComponent } from './nav/nav.component';
import {MainComponent} from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { NotFoundComponent } from './not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavComponent ,MainComponent, FooterComponent ,ProductsComponent ,SingleproductComponent , NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodweb';
}
