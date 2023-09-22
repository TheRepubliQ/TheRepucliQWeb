import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMoradiaComponent } from './registrar-moradia.component';

describe('RegistrarMoradiaComponent', () => {
  let component: RegistrarMoradiaComponent;
  let fixture: ComponentFixture<RegistrarMoradiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarMoradiaComponent]
    });
    fixture = TestBed.createComponent(RegistrarMoradiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
