import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component/app.component';
import { ShipsComponent } from './ships.component/ships.component';
import { SailingService } from './ships.component/sailing.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ShipsComponent],
  bootstrap:    [ AppComponent ],
  providers: [SailingService ]
})
export class AppModule { }
