import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PopoComponent } from './popo/popo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TabloComponent } from './tablo/tablo.component';
import {MatTableModule} from '@angular/material/table';
import { Tablo2Component } from './tablo2/tablo2.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  imports: [
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    BrowserModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'popo', component: PopoComponent},
      { path: 'crud', component: PopoComponent},
      { path: 'tablo', component: TabloComponent},
      { path: 'tablo2', component: Tablo2Component},
      { path: 'tablo3', component: EmployeeFormComponent},
    ]),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    PopoComponent,
    TabloComponent,
    Tablo2Component,
    EmployeeFormComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/