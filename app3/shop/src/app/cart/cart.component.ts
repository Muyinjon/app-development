import { Component } from '@angular/core';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  amount: number = 19;
  title = 'shop';
  input_quantity: number = 1;
}
