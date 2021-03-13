import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: Product = {
    price: 0,
    tax: 0,
    isOnSale: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
