import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent }  from './app.component/app.component';
import { ShipsComponent } from './ships.component/ships.component';

import { SailingService } from './ships.component/sailing.service';
import { OrderService } from './app.services/order.service';

import { ShipsDetailComponent } from './ships-detail.component/ships-detail.component';
import { OrderDetailComponent } from './order-detail.component/order-detail.component';

const appRoutes: Routes = [
  {path: 'order-detail', component: OrderDetailComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
 // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ShipsComponent, ShipsDetailComponent, OrderDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SailingService, OrderService ]
})
export class AppModule { }
