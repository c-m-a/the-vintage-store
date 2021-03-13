import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Order } from '../../models/Order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  ordersUrl:string = 'http://localhost:5000/orders';

  order: Order = {
    product: {
      price: 0,
      tax: 0,
      isOnSale: false
    },
    total: 0
  };

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if(history.state.product === undefined)
      this.router.navigate(['']);

    this.order.product = history.state.product;
    this.order.total = history.state.product.price;

    if (history.state.product.id === 1) {
      if (history.state.product.isOnSale) {
        this.order.total = this.order.product.tax + 0.8 * this.order.total;
      } else {
        this.order.total += this.order.product.tax;
      }
    }
  }

}
