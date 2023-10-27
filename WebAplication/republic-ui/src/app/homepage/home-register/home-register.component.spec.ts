import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegisterComponent } from './home-register.component';

describe('HomeRegisterComponent', () => {
  let component: HomeRegisterComponent;
  let fixture: ComponentFixture<HomeRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRegisterComponent]
    });
    fixture = TestBed.createComponent(HomeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
