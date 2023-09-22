import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarResidenciasComponent } from './listar-residencias.component';

describe('ListarResidenciasComponent', () => {
  let component: ListarResidenciasComponent;
  let fixture: ComponentFixture<ListarResidenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarResidenciasComponent]
    });
    fixture = TestBed.createComponent(ListarResidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
