import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarOSComponent } from './visualizar-os.component';

describe('VisualizarOSComponent', () => {
  let component: VisualizarOSComponent;
  let fixture: ComponentFixture<VisualizarOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarOSComponent]
    });
    fixture = TestBed.createComponent(VisualizarOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
