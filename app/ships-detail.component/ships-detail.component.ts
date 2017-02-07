import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Sailing } from '../sailings';
import { SailingOption } from '../sailing-options';
import { CruiseLine } from '../cruise-line';


@Component({
    moduleId: module.id,
    selector: 'ship-detail',
    templateUrl: 'ships-detail.component.html'
})
export class ShipsDetailComponent {

    @Input() cruiseLine: CruiseLine;
    @Output() selectedOptionEmitter: EventEmitter<SailingOption> = new EventEmitter();

    selectedOptionPrice: number = 0;
    selectedOption: SailingOption;

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
       this.selectedOption = sailingOption;
       this.selectedOptionEmitter.emit(this.selectedOption);
    }


}
