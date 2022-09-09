import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableExporterModule } from 'mat-table-exporter';
import { NameHeaderRowPipe } from './name-header-row.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    NameHeaderRowPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatSidenavModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    MatTableExporterModule,
    SharedModule,
    NameHeaderRowPipe
  ]
})
export class SharedProtectedModule { }
