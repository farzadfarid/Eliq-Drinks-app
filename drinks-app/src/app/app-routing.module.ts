import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/Components/product-list/product-list.component';
import { ProductDetailsComponent } from './products/Components/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products', component: ProductListComponent,
  },
  {
    path: 'productDetails/:id', component: ProductDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
