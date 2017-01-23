import { Component, Input } from '@angular/core';

import { Sailing } from '../sailings';
import { SailingOption } from '../sailing-options';

@Component({
    moduleId: module.id,
    selector: 'ship-detail',
    templateUrl: 'ships-detail.component.html'
})
export class ShipsDetailComponent {

    @Input() sailing: Sailing;
    selectedOptionPrice: number;

    getLowestSailingPrice(sailing: Sailing): number {
        let lowest = sailing.sailing_options[0].sailing_price;
        for (let i = 1; i < sailing.sailing_options.length; i++) {
            if (sailing.sailing_options[i].sailing_price < lowest) {
                lowest = sailing.sailing_options[i].sailing_price;
            }
        }
        return lowest;
    }

    updateSelected(sailingOption: SailingOption): void {
       this.selectedOptionPrice = sailingOption.sailing_price;
    }

}
