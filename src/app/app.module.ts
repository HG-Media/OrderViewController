import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { OrderViewService } from './service/order-view.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    OrderViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    NgbModule,
    RouterModule,
    CommonModule,
  ],
  providers: [OrderViewService,{provide: "BASE_API_URL", useValue: "http://27.72.28.11:3126/api/" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
