import { ProductResolver } from './product.resolver';
import { ProductService } from './../core/services/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { SharedProtectedModule } from './shared-protected/shared-protected.module';
import { ListProductModule } from './list-product/list-product.module';
import { AddProductModule } from './add-product/add-product.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedProtectedModule,
    ListProductModule,
    AddProductModule,
    ProtectedRoutingModule
  ],
  providers: [
    ProductService,
    ProductResolver
  ]
})
export class ProtectedModule { }
