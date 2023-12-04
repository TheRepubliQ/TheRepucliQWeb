import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestOwnerComponent } from './interest-owner.component';

describe('InterestOwnerComponent', () => {
  let component: InterestOwnerComponent;
  let fixture: ComponentFixture<InterestOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestOwnerComponent]
    });
    fixture = TestBed.createComponent(InterestOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
