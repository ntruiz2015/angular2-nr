import { Component, Input } from '@angular/core';

import { Sailing } from '../sailings';
import { CruiseLine } from '../cruise-line';
import { Ship } from '../ship';

@Component({
    moduleId: module.id,
    selector: 'ship-detail',
    templateUrl: 'ships-detail.component.html'
})
export class ShipsDetailComponent {

    @Input() sailing: Sailing;

    getLowestSailingPrice(sailing: Sailing): number {
        let lowest = sailing.sailing_options[0].sailing_price;
        for (let i = 1; i < sailing.sailing_options.length; i++) {
            if (sailing.sailing_options[i].sailing_price < lowest) {
                lowest = sailing.sailing_options[i].sailing_price;
            }
        }
        return lowest;
    }

}