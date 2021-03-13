import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

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

  saleOffRange: Array<any> = [
    {min: 'T08:00:00', max: 'T09:00:00'},
    {min: 'T10:00:00', max: 'T11:00:00'},
    {min: 'T16:00:00', max: 'T17:00:00'}
  ];

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    const now: Date = new Date();

    this.ps.getProduct().subscribe(product => {
      this.product = product;

      if (this.product.id === 1)
        this.product.isOnSale = this.isOnSale(now);
    });
  }

  isOnSale(now:Date): Boolean {
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(now);
    const mm = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(now);
    const dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(now);

    for (const timeRange of this.saleOffRange) {
      const min:Date = new Date(`${year}-${mm}-${dd}${timeRange.min}`);
      const max:Date = new Date(`${year}-${mm}-${dd}${timeRange.max}`);

      if (now > min && now < max) return true;
    }

    return false;
  }

}
