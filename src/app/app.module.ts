import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { AlertifyService } from './services/alertify.service';
import { PostFilterPipe } from './post/pipes/post-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavComponent,
    PostComponent,
    PostFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
