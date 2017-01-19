import { Component, OnInit } from '@angular/core';

import { SailingService } from './sailing.service';
import { Sailing } from '../sailings';
import { CruiseLine } from '../cruise-line';
import { Ship } from '../ship';

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
            result => { this.ships = result; },
            error => this.errorMessage = error);
    }

}