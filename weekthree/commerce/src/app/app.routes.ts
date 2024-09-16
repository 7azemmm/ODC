import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent,
    },
    {
        path:"home",
        component:HomeComponent

    },
    {
        path:"products",
        component:ProductsComponent,
    }, {   path:'products/:productId',
        component:SingleProductComponent
     },{
        path:"form",
        component:FormComponent,
     }
];
