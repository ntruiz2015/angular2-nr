import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component/app.component';
import { ShipsComponent } from './ships.component/ships.component';
import { SailingService } from './ships.component/sailing.service';
import { ShipsDetailComponent } from './ships-detail.component/ships-detail.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ShipsComponent, ShipsDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SailingService ]
})
export class AppModule { }
