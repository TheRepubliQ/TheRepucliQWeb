import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOwnerComponent } from './home-owner.component';

describe('HomeOwnerComponent', () => {
  let component: HomeOwnerComponent;
  let fixture: ComponentFixture<HomeOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOwnerComponent]
    });
    fixture = TestBed.createComponent(HomeOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
