import { SharedProtectedModule } from './../protected/shared-protected/shared-protected.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { SharedPublicModule } from './shared-public/shared-public.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomeModule,
    SharedPublicModule,
    SharedPublicModule
  ]
})
export class PublicModule { }
