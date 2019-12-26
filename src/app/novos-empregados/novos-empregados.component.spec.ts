import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosEmpregadosComponent } from './novos-empregados.component';

describe('NovosEmpregadosComponent', () => {
  let component: NovosEmpregadosComponent;
  let fixture: ComponentFixture<NovosEmpregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovosEmpregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovosEmpregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
