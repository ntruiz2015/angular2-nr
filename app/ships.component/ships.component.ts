import { Component, OnInit } from '@angular/core';

import { SailingService } from './sailing.service';
import { Sailing } from '../sailings';
import { CruiseLine } from '../cruise-line';
import { Ship } from '../ship';
import { ShipsDetailComponent } from '../ships-detail.component/ships-detail.component';

// import { Serialize } from '../data/serialize'

@Component({
    moduleId: module.id,
    selector: 'ships-component',
    templateUrl: 'ships.component.html'
})
export class ShipsComponent implements OnInit {
    ships: Ship[] = [];
    sailings: Sailing[] = [];
    cruiseLines: CruiseLine[] = [];
    errorMessage: string;
    selectedTotal: number;

    constructor(private sailingService: SailingService) { };

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
                  cruiseLine.sailings = this.matchSailing(cruiseLine.cruise_line_id);
                  return cruiseLine;
                  });
            },
            error => this.errorMessage = error);
    }

    matchSailing(cruiseLineId: number): Sailing {
      let matched = this.sailings.find(sailing => sailing.sailing_cruise_line_id === cruiseLineId);
      return matched;
    }

    updatedSelectedTotal(selectedOptionPrice: number) {
      this.selectedTotal = selectedOptionPrice;
    }

    // serialize() {
      //     for (let i = 0; i < this.sailings.length; i++) {
      //         this.sailingService.fillFromJson(this.sailings[i]);
      //     }
      // }



}
