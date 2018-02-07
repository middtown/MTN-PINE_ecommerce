import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AboutDevsComponent } from './about-devs/about-devs.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes :Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'items',
		component: ItemsComponent
		// children: [
		// 	{
		// 		path: 'items/category',
		// 		component: ItemsComponent
		// 	}
		// ]
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'about-devs',
		component: AboutDevsComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: 'checkout',
		component: CheckoutComponent
	}	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}