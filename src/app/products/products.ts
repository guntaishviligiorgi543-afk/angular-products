import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      price: 2500,
      category: 'Phone',
    },
    {
      id: 2,
      name: 'Samsung S24',
      price: 2200,
      category: 'Phone',
    },
    {
      id: 3,
      name: 'MacBook Air',
      price: 3500,
      category: 'Laptop',
    },
    {
      id: 4,
      name: 'Dell XPS',
      price: 4200,
      category: 'Laptop',
    },
  ];
}
