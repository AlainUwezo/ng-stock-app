import { SharedProtectedModule } from './../shared-protected/shared-protected.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductRoutingModule } from './list-product-routing.module';
import { ListProductComponent } from './list-product/list-product.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ListProductRoutingModule,
    SharedProtectedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ListProductModule { }
