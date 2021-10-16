import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDatosPage } from './mostrar-datos.page';

describe('MostrarDatosPage', () => {
  let component: MostrarDatosPage;
  let fixture: ComponentFixture<MostrarDatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDatosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
