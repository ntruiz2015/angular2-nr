/**
 * Created by nruiz on 2/3/2017.
 */
import { Component, OnInit } from '@angular/core';

import { OrderService } from '../app.services/order.service'

@Component({
  moduleId: module.id,
  selector: 'order-detail',
  templateUrl: 'order-detail.component.html'
})
export class OrderDetailComponent implements OnInit {

  constructor(private orderService: OrderService){}

  ngOnInit(): void {

  }
}
