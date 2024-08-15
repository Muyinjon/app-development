import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'validation-modal',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for Angular directives like ngSwitch
  template: `
    <div *ngIf="isVisible" class="modal">
      <div class="modal-content">
        <ng-container [ngSwitch]="errorType">
          <small *ngSwitchCase="'required'">Quantity is required.</small>
          <small *ngSwitchCase="'min'">Quantity cannot be less than 1.</small>
          <small *ngSwitchCase="'max'"
            >Quantity cannot exceed stock limit ({{ amount }}).</small
          >
          <small *ngSwitchDefault>Unknown error.</small>
        </ng-container>
        <button (click)="closeModal()">Close</button>
      </div>
    </div>
  `,
  styleUrls: ['./validation-modal.component.css'],
  schemas: [NO_ERRORS_SCHEMA], // Allow any properties or elements
})
export class ValidationModalComponent {
  @Input() isVisible: boolean = false;
  @Input() errorType: string | null = null;
  @Input() amount: number = 0;

  closeModal() {
    this.isVisible = false;
  }
}
