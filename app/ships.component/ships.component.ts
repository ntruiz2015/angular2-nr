import { Component, OnInit } from '@angular/core';

import { SailingService } from './sailing.service';
import { Sailing } from '../sailings';
import { CruiseLine } from '../cruise-line';
import { Ship } from '../ship';
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
            },
            error => this.errorMessage = error);
    }

    // serialize() {
    //     for (let i = 0; i < this.sailings.length; i++) {
    //         this.sailingService.fillFromJson(this.sailings[i]);
    //     }
    // }


}