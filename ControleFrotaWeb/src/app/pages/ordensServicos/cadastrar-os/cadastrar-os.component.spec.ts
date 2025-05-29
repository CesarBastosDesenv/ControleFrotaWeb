import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOSComponent } from './cadastrar-os.component';

describe('CadastrarOSComponent', () => {
  let component: CadastrarOSComponent;
  let fixture: ComponentFixture<CadastrarOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarOSComponent]
    });
    fixture = TestBed.createComponent(CadastrarOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
