import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutDevsComponent } from './about-devs/about-devs.component';
import { ProfileComponent } from './profile/profile.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ItemService } from './item.service';
import { CartService } from './cart.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    ItemDetailComponent,
    SignUpComponent,
    LogInComponent,
    AboutDevsComponent,
    ProfileComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ItemService, 
    CartService, 
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
