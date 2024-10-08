import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationModalComponent } from './validation-modal.component';

describe('ValidationModalComponent', () => {
  let component: ValidationModalComponent;
  let fixture: ComponentFixture<ValidationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
