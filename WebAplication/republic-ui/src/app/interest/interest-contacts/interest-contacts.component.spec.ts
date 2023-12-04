import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestContactsComponent } from './interest-contacts.component';

describe('InterestContactsComponent', () => {
  let component: InterestContactsComponent;
  let fixture: ComponentFixture<InterestContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestContactsComponent]
    });
    fixture = TestBed.createComponent(InterestContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
