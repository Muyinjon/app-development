import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PassThrough } from 'stream';
import { ValidationModalComponent } from '../validation-modal/validation-modal.component';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [FormsModule, CommonModule, ValidationModalComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  amount: number = 20;
  title = 'shop';
  name: string = 'Grand Theft Auto VI';
  inputValue: number = 0;
  price: number = 39.99;
  total: number = 0;
  finalTotal: number = 0;
  orders: { name: string; amount: number; price: number; total: number }[] = [];
  submittedValues: number[] = [];
  isModalVisible: boolean = false;
  errorType: string | null = null;
  hasSubmittedOrders: boolean = false;

  onSubmit(cartForm: NgForm) {
    if (cartForm.invalid) {
      if (cartForm.controls['quantity'].errors) {
        if (cartForm.controls['quantity'].errors['required']) {
          this.errorType = 'required';
        } else if (cartForm.controls['quantity'].errors['min']) {
          this.errorType = 'min';
        } else if (cartForm.controls['quantity'].errors['max']) {
          this.errorType = 'max';
        }
      }
      this.isModalVisible = true;
      return;
    }

    const orderTotal = this.inputValue * this.price;
    this.orders.push({
      name: this.name,
      amount: this.inputValue,
      price: this.price,
      total: orderTotal,
    });

    this.submittedValues.push(this.inputValue);
    this.total = this.inputValue * this.price;
    this.total = parseFloat(this.total.toFixed(2));
    this.finalTotal += orderTotal; // Update the final total price
    this.finalTotal = parseFloat(this.finalTotal.toFixed(2));
    this.amount -= this.inputValue;
    this.hasSubmittedOrders = true;
    this.inputValue = 0;
  }

  getSubmittedValues() {
    return this.submittedValues, this.orders;
  }
}
