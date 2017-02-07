/**
 * Created by nruiz on 2/7/2017.
 */
import { SailingOption } from './sailing-options';

export class OrderComponent {

  shipName: string;
  sailingTitle: string;
  sailingOptionSelected: SailingOption;

  constructor(shipName: string, sailingTitle: string, sailingOptionSelected: SailingOption){
    this.shipName = shipName;
    this.sailingTitle = sailingTitle;
    this.sailingOptionSelected = sailingOptionSelected;
  }
}
