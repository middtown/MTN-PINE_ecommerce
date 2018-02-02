import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
=======
    AppRoutingModule,
>>>>>>> bd839d7d78f47faccb97f4ee2be1288f525a2596
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
