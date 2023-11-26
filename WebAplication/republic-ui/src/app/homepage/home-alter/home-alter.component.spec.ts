import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlterComponent } from './home-alter.component';

describe('HomeAlterComponent', () => {
  let component: HomeAlterComponent;
  let fixture: ComponentFixture<HomeAlterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAlterComponent]
    });
    fixture = TestBed.createComponent(HomeAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
