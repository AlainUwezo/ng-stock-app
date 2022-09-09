import { ProductResolver } from './../product.resolver';
import { ListProductComponent } from './list-product/list-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list-product', component: ListProductComponent, resolve: { products: ProductResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProductRoutingModule {

}
