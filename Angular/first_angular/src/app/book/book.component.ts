import { Component } from '@angular/core';
import { Bookreponsitority } from './reponsitority.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  model: Bookreponsitority = new Bookreponsitority();

}
