import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterFormComponent } from './alter-form.component';

describe('AlterFormComponent', () => {
  let component: AlterFormComponent;
  let fixture: ComponentFixture<AlterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterFormComponent]
    });
    fixture = TestBed.createComponent(AlterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
