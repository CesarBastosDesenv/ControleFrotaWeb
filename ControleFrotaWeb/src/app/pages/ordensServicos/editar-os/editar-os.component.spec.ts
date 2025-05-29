import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOSComponent } from './editar-os.component';

describe('EditarOSComponent', () => {
  let component: EditarOSComponent;
  let fixture: ComponentFixture<EditarOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarOSComponent]
    });
    fixture = TestBed.createComponent(EditarOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
