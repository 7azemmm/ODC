import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainChildComponent } from './main-child/main-child.component';
import { MainChildTwoComponent } from './main-child-two/main-child-two.component';

export const routes: Routes = [

   {
    path:'admin', redirectTo:'not'
   },
    {
        path:'main',
        component:MainComponent,
        children:[
            {
         path:"",
         component:MainChildComponent,
        }, {
            path:'secondChild', 
            component:MainChildTwoComponent
        }
    ]
    },
    {
        path:'products',
        component:ProductsComponent,
    }, 
    {
        path:'',
        component:MainComponent,
    },
    {
        path:'products/:productId',
        component:SingleproductComponent
    },
    {
        path:"**",
        component:NotFoundComponent,
    }




];
