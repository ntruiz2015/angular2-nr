import { Component, OnInit, ViewChildren, QueryList, Output } from '@angular/core';
import { Router } from '@angular/router';

import { SailingService } from './sailing.service';
import { OrderService } from '../app.services/order.service';

import { Sailing } from '../sailings';
import { CruiseLine } from '../cruise-line';
import { Ship } from '../ship';
import { ShipsDetailComponent } from '../ships-detail.component/ships-detail.component';
import { Order } from '../order';
import { OrderComponent } from '../order-comp';

@Component({
    moduleId: module.id,
    selector: 'ships-component',
    templateUrl: 'ships.component.html'
})
export class ShipsComponent implements OnInit  {
    ships: Ship[] = [];
    sailings: Sailing[] = [];
    cruiseLines: CruiseLine[] = [];
    errorMessage: string;
    selectedTotal: number = 0;

    @ViewChildren(ShipsDetailComponent) shipsDetailComponent: QueryList<ShipsDetailComponent>;
    @Output() order: Order;

    constructor(
      private sailingService: SailingService,
      private router: Router,
      private orderService: OrderService
    ) { };

    ngOnInit(): void {
        this.getSailingsCruiseLines();
    }

    getSailingsCruiseLines() {
        this.sailingService.getSailingsCruiseLines()
            .subscribe(
            result => {
                this.ships = result;
                this.sailings = result.sailings;
                this.cruiseLines = result.cruise_lines;
                this.cruiseLines =  this.cruiseLines.map((cruiseLine) => {
                  cruiseLine.sailing = this.matchSailing(cruiseLine.cruise_line_id);
                  return cruiseLine;
                  });
            },
            error => this.errorMessage = error);
    }

    matchSailing(cruiseLineId: number): Sailing {
      let matched = this.sailings.find(sailing => sailing.sailing_cruise_line_id === cruiseLineId);
      return matched;
    }

    updatedSelectedTotal() {
        let totalSelected = 0;
        this.shipsDetailComponent.forEach((component) => {
          totalSelected+=component.selectedOptionPrice;
        })
        this.selectedTotal = totalSelected;
    }

    createOrder(): void {
      let components: OrderComponent[] = []
      this.shipsDetailComponent.forEach(comp => {
        if(comp.selectedOption) {
          let component = this.orderService.createComponent(comp.cruiseLine.cruise_ship_name,
            comp.cruiseLine.sailing.sailing_name, comp.selectedOption);
          components.push(component);
        }
      });
      this.order = this.orderService.createOrder(this.selectedTotal, components);
    }
}
