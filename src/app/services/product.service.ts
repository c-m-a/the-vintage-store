import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl:string = 'http://localhost:5000/products';

  constructor(private http:HttpClient) { }

  getProduct():Observable<Product> {
    return this.http.get<Product>(this.productUrl);
  }
}
