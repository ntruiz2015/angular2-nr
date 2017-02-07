/**
 * Created by nruiz on 2/6/2017.
 */
import { OrderComponent } from './order-comp';

export class Order {
  orderTotal: number;
  orderComponents: OrderComponent[];

  constructor (orderTotal: number, orderComponents: OrderComponent[]) {
    this.orderTotal = orderTotal;
    this.orderComponents = orderComponents;
  }
}
