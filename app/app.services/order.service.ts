/**
 * Created by nruiz on 2/6/2017.
 */
import { Injectable } from '@angular/core';

import 'rxjs/Operator';

import { Order } from '../order';
import { OrderComponent } from '../order-comp';
import { SailingOption } from '../sailing-options';

@Injectable()
export class OrderService {
  private orders: Order [];
  private orderComponents: OrderComponent[] = [];

  getOrders(): Order[]{
    return this.orders;
  }

  createOrder(total: number, orderComponents: OrderComponent[] ): Order {
    let order = new Order(total, orderComponents);
    return order;
  }

  createComponent(shipName: string, sailingTitle: string, sailingOptionSelected: SailingOption): OrderComponent {
    let orderComp = new OrderComponent(shipName, sailingTitle, sailingOptionSelected);
    return orderComp;
  }

  addComponents(comp: OrderComponent): void {
    this.orderComponents.push(comp);
  }

}
